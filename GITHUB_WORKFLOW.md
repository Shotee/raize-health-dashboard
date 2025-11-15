# GitHub Workflow for Multi-Agent Development

## 🎯 各エージェントのGitHub機能

### Claude Code Agent
✅ **Git操作**
- `git status`, `git diff`, `git log`
- `git add`, `git commit`, `git push`
- `git checkout`, `git branch`, `git merge`

✅ **GitHub CLI (`gh`)**
- `gh issue create` - Issue作成
- `gh pr create` - PR作成
- `gh pr review` - PRレビュー
- `gh pr list` - PR一覧
- `gh issue list` - Issue一覧
- `gh repo view` - リポジトリ情報

✅ **GitHub Actions統合**
- `.github/workflows/claude.yml` で自動化
- `@claude` メンションで反応

### Codex Agent
✅ **Git操作**
- 全てのGitコマンド実行可能
- ブランチ作成・切り替え
- コミット・プッシュ

✅ **GitHub CLI (`gh`)**
- `gh` コマンド実行可能
- Issue/PR操作可能

### GitHub MCP
✅ **Issue管理**
- Issue作成・更新・クローズ
- Issueコメント追加
- Issueラベル管理

✅ **PR管理**
- PR作成・更新・マージ
- PRレビューコメント
- PRステータス確認

✅ **リポジトリ操作**
- ファイル読み書き
- ブランチ管理
- コミット履歴取得

## 🚀 完全なGitHubワークフロー

### ステップ1: Issue作成（Claude Code or GitHub MCP）

```bash
# Claude Code経由
claude -p "Raize Healthダッシュボード実装のIssueを作成して"

# GitHub MCP経由（私が呼び出し）
# → GitHub MCPでIssue作成
```

### ステップ2: ブランチ作成（Codex or Claude Code）

```bash
# Codex経由
codex exec "feature/raize-health-dashboard ブランチを作成して切り替えて"

# Claude Code経由
claude -p "feature/raize-health-dashboard ブランチを作成"
```

### ステップ3: 実装（Codex並列実行）

```bash
# 各タスクを並列実行
codex exec "タスク1: プロジェクトセットアップ" --full-auto &
codex exec "タスク2: レイアウトコンポーネント" --full-auto &
codex exec "タスク3: ダッシュボードコンポーネント" --full-auto &
wait
```

### ステップ4: コミット・プッシュ（Claude Code）

```bash
# Claude Codeが自動的に
git add .
git commit -m "feat: implement Raize Health dashboard"
git push origin feature/raize-health-dashboard
```

### ステップ5: PR作成（Claude Code or GitHub MCP）

```bash
# Claude Code経由
claude -p "実装が完了したのでPRを作成して。変更内容をまとめて"

# GitHub MCP経由（私が呼び出し）
# → GitHub MCPでPR作成
```

### ステップ6: UIテスト（Playwright MCP）

```bash
# Playwright MCP経由（私が呼び出し）
# → ブラウザで自動テスト実行
# → スクリーンショット取得
# → テスト結果をPRコメントに追加
```

### ステップ7: レビュー（Claude Code）

```bash
# Claude CodeがPRをレビュー
claude -p "このPRのコードをレビューして、コメントを追加して"
```

## 📋 実際のワークフロー例

### 例: Raize Healthダッシュボード実装

```
1. Issue作成
   → Claude Code: "Raize Healthダッシュボード実装" Issue作成
   
2. ブランチ作成
   → Codex: feature/raize-health-dashboard ブランチ作成
   
3. プランニング
   → Claude Code: PLAN.md作成
   
4. 実装（並列）
   → Codex: タスク1,2,3を並列実行
   
5. コミット
   → Claude Code: 変更をコミット・プッシュ
   
6. PR作成
   → Claude Code: PR作成（変更内容をまとめて）
   
7. UIテスト
   → Playwright MCP: 自動テスト実行
   → 結果をPRコメントに追加
   
8. レビュー
   → Claude Code: PRレビュー・コメント追加
   
9. マージ
   → GitHub MCP or Claude Code: PRマージ
```

## 🎯 各エージェントの役割分担

| タスク | エージェント | 理由 |
|--------|------------|------|
| Issue作成 | Claude Code / GitHub MCP | 計画立案に強い |
| ブランチ作成 | Codex / Claude Code | どちらでも可能 |
| プランニング | Claude Code | 計画立案に最適 |
| 実装 | Codex | 並列実行が得意 |
| コミット | Claude Code | Git操作が得意 |
| PR作成 | Claude Code / GitHub MCP | 変更内容をまとめるのが得意 |
| UIテスト | Playwright MCP | 専用ツール |
| レビュー | Claude Code | コード理解が得意 |
| マージ | GitHub MCP / Claude Code | どちらでも可能 |

## 🔧 実装のポイント

### 1. IssueとPRの自動リンク

```bash
# PR作成時にIssue番号を含める
gh pr create --title "feat: Raize Health dashboard" \
  --body "Closes #123" \
  --base main
```

### 2. 自動テスト統合

```yaml
# .github/workflows/test.yml
name: E2E Tests
on: [pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm install
      - run: npm run test:e2e
```

### 3. レビューコメントの自動追加

```bash
# Claude CodeがPRレビュー後にコメント追加
gh pr comment 123 --body "レビュー完了。LGTM!"
```

## 🎉 完全自律的な開発フロー

このワークフローにより、以下が**完全自動化**されます：

✅ Issue作成 → ブランチ作成 → 実装 → コミット → PR作成 → テスト → レビュー → マージ

**全てのエージェントがGitHubを開発者のように使いこなします！** 🚀

