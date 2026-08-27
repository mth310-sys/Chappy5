# Chappy5 1号機 — 企画選定共有状態

> Status: `PRODUCT_PLANNING_ACTIVE`
> Stage: `Stage 1 — Product Planning`
> Human Gate: `HUMAN_GATE_1_NOT_READY`
> Production permission: `DENIED_UNTIL_HUMAN_MACHINE_APPROVED`

## 正本

- 最新 `main`
- `README.md`
- `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`
- `docs/REALITY_PRESENTATION_STANDARD.md`
- `docs/MACHINE_01_CONCEPTS.md`
- `docs/MACHINE_01_COMPARISON.md`

過去チャット、過去企画、過去Chappy5実験、旧SLOT制は正本ではない。

## 制作ライン

固定5 Directorを12分オフセットした5つの独立Scheduled Taskとして運用する。

1. Machine Director — +0
2. Game & Reel Director — +12
3. Visual & Mechanism Director — +24
4. Sound & Experience Director — +36
5. Playtest & QA Director — +48

1巡60分。各Runは開始時に最新mainを再取得し、この共有文書と同じ企画・比較資料を更新する。

## 現在地

Gate 0確認を経て、Stage 1の商品企画を進行中。Machine Director初回で2026-08-28時点の市場確認と遊創舎技術資産の入口調査を行い、明確に完成体験が異なる3候補を立ち上げた。採択企画はまだ存在しない。

## 現在の企画候補

### A. `SIGNAL//3`
3回のSTOPで雑音の中から当たりの信号を捕まえる。核は「発見／違和感／共鳴」。TUNING RING、水平走査LED、3音ロック、雑音が音楽へ変わる報酬体験。

### B. `FORGE//HEART`
3回のSTOPを3回の鍛打に変え、台そのものを鍛えて当たりを打ち出す。核は「打撃／重量／製造」。FORGE HAMMER、炉の間接光、3STOPと衝撃同期。

### C. `VAULT://3`
3リールを3タンブラーとして毎ゲーム金庫を開ける。核は「緊張／ニアミス／解放」。巨大LOCK RING、横BOLT、4段階解錠音。現時点ではパチスロ必然性が最も直感的。

詳細は `docs/MACHINE_01_CONCEPTS.md`、比較は `docs/MACHINE_01_COMPARISON.md` を正とする。

## 今巡の共通目標

**「3STOPがテーマ演出ではなくゲームそのものになっているか」を3候補共通で検証する。**

後続4 Directorは別々の企画を作らず、この3候補へそれぞれの専門性を重ねる。とくに次のGame & Reel Directorは、各案について1st/2nd/3rd STOPで何が分かり、出目だけで何が読め、通常100Gでも反復作業にならないかを具体化する。

## 最大ボトルネック

3案とも一文フック・筐体・音の完成像は立ったが、まだ「内部当選後の見せ方としてSTOPを使っているだけではない」と証明できていないこと。

生存条件は以下。

1. 1st STOPで新しい情報が生まれる。
2. 2nd STOPで期待が変化する。
3. 3rd STOPで遊技上の意味が確定する。
4. 液晶を見なくても出目に意味がある。
5. 通常100Gが同じ三段演出の反復にならない。
6. 初心者には直感、熟練者には読みの余地がある。

これを満たせない候補はテーマが強くても淘汰する。

## Machine Director暫定評価

採択判断ではない暫定順位：

1. `VAULT://3` — パチスロ必然性と完成機の想像しやすさが現時点で最も高い。最大リスクは単純な鍵合わせ化。
2. `SIGNAL//3` — 独自性・Signature Sound・同期思想の伸びしろ最大。最大リスクは抽象性。
3. `FORGE//HEART` — REALITY/PRESENCEとSTOP手応えは非常に強い。最大リスクは3時間遊技での疲労。

順位は後続Directorの具体化で逆転可能。点数だけで採択しない。

## 市場研究で確認したこと

2026-08-25版P-WORLD設置台数ではノーマル系とスマスロAT系が上位に同居。2026-08-25公開の市場記事では7月平均稼働8,957枚、スマスロ設置比率60.7%で、高単価機が続く一方、8月の低中単価帯新台も初動好調と報告されている。よって1号機を“荒さだけ”で差別化しない。

研究結果は企画そのものではない。第三者機種の固有ゲーム・演出・IPは流用しない。

参考URLは `docs/MACHINE_01_CONCEPTS.md` に記録。

## 遊創舎技術資産調査（企画段階の候補化のみ）

- `mth310-sys/yusosha-design-lab` — 筐体シェル比率、構造分割、Industrial Designの研究資産。
- `mth310-sys/yusosha-usage-test` — 多数のリール／状態遷移／可動・LED・検証技術の蓄積が存在。第三者IP部分そのものは利用せず、遊創舎が自作した技術・コード・機構だけを必要時に分離して再利用・変形候補とする。
- `mth310-sys/yusosha-slot` — 過去の遊創舎スロット開発資産。採用ありきにせず、企画確定後に必要技術だけ精査する。

現時点では資産をコピー・実装していない。

## 確定事項

- 1号機は遊創舎完全オリジナル。
- 完成機を前提に企画し、実装容易性を理由に縮小しない。
- REALITY / PRESENCEをゲーム性と同格で扱う。
- リールを飾りにしない。
- Soundを後付けにしない。
- 1号機候補は現時点で3案。最初から1案へ決め打ちしない。
- Human Gate 1通過前はコード、ゲーム本体、Micro Playable、Visual Prototype、Audio Prototype、リール／筐体／役物実装を行わない。
- AIは `HUMAN_MACHINE_APPROVED` を発行しない。

## 未確定事項

- 3案の生存／統合／淘汰
- 最終候補数
- 各案の具体的ゲーム／リール骨格
- 出目法則とSTOP責務
- 出玉・設定差思想の具体化
- 筐体／役物機構の実現方式
- Signature Soundの最終候補
- 過去資産の最終採否
- Machine Directorの最終推奨

## 次Directorが読むもの

最新main全体を再取得した上で、最低限以下。

1. `README.md`
2. `docs/PACHISLOT_PRODUCTION_WORKFLOW.md`
3. `docs/REALITY_PRESENTATION_STANDARD.md`
4. `docs/MACHINE_01_PLANNING.md`
5. `docs/MACHINE_01_CONCEPTS.md`
6. `docs/MACHINE_01_COMPARISON.md`

Game & Reel Directorは3案共通の最大ボトルネック「3STOPの遊技上の必然性」を攻める。別企画へ拡散しない。

## Human Gate停止条件

最終候補が完成機として頭の中で試打できる品質まで練られ、5 Director評価・比較・最大リスク・Machine Director推奨・AIでは決めるべきでない点が揃った時のみ `HUMAN_GATE_1_WAITING` へ移行する。

人間が明示的に `HUMAN_MACHINE_APPROVED` を出すまで本制作へ進まない。
