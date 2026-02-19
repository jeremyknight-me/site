---
title: "Git Repo Updates Made Simple"
date: "2026-02-16"  
redirect_from: '/posts/2026/2026-02-16-git-repo-updater'
tags: 
  - "git"
  - "powershell"
  - "code"
  - "automation"
---

As developers, we’re always looking to optimize our workflows. This PowerShell script, `Update-GitRepos`, automates the process of keeping your Git repositories up-to-date. It’s a little helper that takes care of the grunt work for you.

## How `Update-GitRepos` Works

The `Update-GitRepos` function recursively scans a directory for Git repositories and performs the 
following actions for each one:

- **Parameters:** Accepts an optional `$RootDirectory` parameter, which defaults to the current directory if not specified.
- **Directory Detection:** Uses `Get-ChildItem` to find all directories within the specified root.
- **`.git` Verification:** Confirms the presence of a `.git` folder, providing a clear warning if a repository isn't found.
- **Branch Detection:** Intelligently determines the target branch – prioritizing `main` and `master`. The script handles the most common branch naming conventions.
- **Branch Switching:** If your local branch isn't tracking the correct branch, the script automatically switches to it using `git switch`.
- **Fetch and Pull:** Executes `git fetch` to download the latest changes and `git pull` to merge them into your local branch.

## The PowerShell Script

```powershell
function Update-GitRepos {
    param(
        [string]$RootDirectory = (Get-Location)
    )

    $originalLocation = Get-Location

    # Get all directories in the root directory
    Get-ChildItem -Path $RootDirectory -Directory | ForEach-Object {
        $folderPath = $_.FullName
        $gitFolder = Join-Path $folderPath ".git"
        if (!(Test-Path $gitFolder)) {
            Write-Host "No git repository found in: $folderPath" -ForegroundColor Yellow
            return
        }

        Write-Host "Updating git repo in: $folderPath" -ForegroundColor Cyan
        Set-Location $folderPath

        # Get list of branches
        $branches = git branch --list | ForEach-Object { $_.Trim().TrimStart('*').Trim() }

        $targetBranch = $null
        if ($branches -contains "main") {
            $targetBranch = "main"
        } elseif ($branches -contains "master") {
            $targetBranch = "master"
        }

        if ($null -eq $targetBranch) {
            Write-Host "Neither 'main' nor 'master' branch found in: $folderPath" -ForegroundColor Yellow
            return
        }

        $currentBranch = (git branch --show-current).Trim()
        if ($currentBranch -ne $targetBranch) {
            Write-Host "Switching to branch: $targetBranch"
            git switch $targetBranch
        }

        git fetch
        git pull
    }

    # Restore the original location
    Set-Location $originalLocation
}
```

## How to Use It

The simplest way to use `Update-GitRepos` is add it directly to your PowerShell profile. This allows it to be executed in any directory. You can find an example of my PowerShell profile here: https://github.com/jeremyknight-me/scripts/blob/master/powershell/profile.ps1

### Profile Run

1) Navigate to the root folder of your repositories.
2) Run the command `Update-GitRepos`

### Manual Run

1) Save the Script: Save the script as `Update-GitRepos.ps1`.
2) Run It: Navigate to the script’s location in PowerShell and execute the following but replace "C:\Path\To\Your\Repositories" with your repository folder’s path.
   ```powershell
   .\Update-GitRepos.ps1 -RootDirectory "C:\Path\To\Your\Repositories"
   ```
