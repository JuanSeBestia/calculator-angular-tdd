module.exports = {
  branch: "feature/semantic-release",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    //   '@semantic-release/npm',
    //   [
    //     '@semantic-release/exec',
    //     {
    //       prepareCmd: 'oclif-dev manifest && oclif-dev readme'
    //     }
    //   ],
    [
      "@semantic-release/git",
      {
        assets: ["README.md"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    "@semantic-release/github"
  ]
};
