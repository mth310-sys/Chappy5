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

過去チャット、過去企画、過去Chappy5実験、旧SLOT制は正本ではない。

## 制作ライン

固定5 Directorを12分オフセットした5つの独立Scheduled Taskとして運用する。

1. Machine Director — +0
2. Game & Reel Director — +12
3. Visual & Mechanism Director — +24
4. Sound & Experience Director — +36
5. Playtest & QA Director — +48

1巡60分。各Runは開始時に最新mainを再取得し、この共有文書と企画・比較資料を更新する。

## 現在地

Chappy5 1号機の企画選定を開始した。現時点で採択企画は存在しない。最初から1案へ決め打ちせず、市場・実機研究と遊創舎技術資産の調査を行いながら、明確に異なる完成体験を持つ有力候補を作成・比較・淘汰する。

## 今巡の共通目標

「ホールに並んでいたら打ちたい」と人間が判断できる完成機候補を複数立ち上げるため、まず市場でプレイヤーがレバー・リール・STOP・告知・報酬・筐体・音へ何を期待しているかを整理し、その研究結果から独立したオリジナル企画候補を形成する。

## 最大ボトルネック

まだ1号機固有の企画候補・比較軸への具体的記入がないこと。テーマ先行ではなく、パチスロとしての必然性、通常時を回す理由、リールを止める意味、当たりの解放感、長時間変化、REALITY / PRESENCE、Signature Sound、看板性を同時に成立させる必要がある。

## 企画候補

未作成。Machine Directorが市場・実機研究と資産調査を踏まえて複数候補を立ち上げ、後続4 Directorが同じ候補へ専門性を重ねる。

## 確定事項

- 1号機は遊創舎完全オリジナルとする。
- 完成機を前提に企画し、実装容易性を理由に縮小しない。
- REALITY / PRESENCEをゲーム性と同格で扱う。
- リールを飾りにしない。
- Soundを後付けにしない。
- Human Gate 1通過前はコード、ゲーム本体、Micro Playable、Visual Prototype、Audio Prototype、リール／筐体／役物実装を行わない。
- AIは `HUMAN_MACHINE_APPROVED` を発行しない。

## 未確定事項

- 企画候補
- 最終候補数
- ゲーム／リール骨格
- 筐体／役物の象徴機構
- Signature Sound
- 出玉・設定差思想
- 過去資産の採否
- Machine Directorの最終推奨

## 次Directorが読むもの

毎Runで最新main全体を再取得した上で、最低限 `README.md`、制作工程正本、REALITY標準、本書、企画候補資料、比較資料の最新版を読むこと。

## Human Gate停止条件

最終候補が完成機として頭の中で試打できる品質まで練られ、5 Director評価・比較・最大リスク・Machine Director推奨・AIでは決めるべきでない点が揃った時のみ `HUMAN_GATE_1_WAITING` へ移行する。

人間が明示的に `HUMAN_MACHINE_APPROVED` を出すまで本制作へ進まない。
