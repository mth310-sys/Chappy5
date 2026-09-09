更新日: 2026-09-10

## 現在地点
- recordCount: **1176**
- latestRecordAdded: **トリプルクラウンZEROII SECOND EDITION**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-02-12_triple-crown-zero2-second-edition.md`
- chronologicalFrontier: **2018-02-19**
- frontierLatestMachine: **コンチネンタルゼロ — No.1175**
- latestRetroactiveRecovery: **トリプルクラウンZEROII SECOND EDITION — No.1176**
- schema: **resetBehavior v0.7**
- status: **2018-02-19_GROUP_CLOSED_WITH_2018-02-12_RETROACTIVE_OMISSION_RECOVERED_NEXT_CONFIRMED_GROUP_2018-03-05_PENDING**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1175 `コンチネンタルゼロ` を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1175件 / chronologicalFrontier 2018-02-19 / 2/19群CLOSED / 2月前半遡及漏れ1機PENDING**。
- GitHub既存検索で`トリプルクラウンZEROII SECOND EDITION`が未登録であることを再確認し、No.1176としてperformance core + resetBehavior v0.7で遡及追加。
- No.1176追加後も時系列frontier自体はNo.1175の2018-02-19。遡及漏れを埋めたため次の未処理日付群探索へ戻る。

## No.1176 — トリプルクラウンZEROII SECOND EDITION
- path: `docs/real_machine_db/machines/2018-02-12_triple-crown-zero2-second-edition.md`
- manufacturer: 清龍ゲームジャパン
- releaseDateCanonical: **2018-02-12**
- aliases: `トリプルクラウンZEROII 2nd EDITION`, `トリプルクラウンZEROⅡ SECOND EDITION`
- formalModelName: `トリプルクラウンZ2-30`
- certificationNumber: `7S1011`
- generation/system: 5号機 / ノーマルA / 完全告知 / 30Φ / リアルボーナス
- 機械割: **96.47 / 98.72 / 100.99 / 103.22 / 105.47 / 107.72%**
- BIG: **1/327.68 / 312.08 / 297.89 / 284.94 / 273.07 / 262.14**
- REG: **1/546.13 / 504.12 / 468.11 / 436.91 / 409.60 / 385.51**
- 合算: **1/204.80 / 192.75 / 182.04 / 172.46 / 163.84 / 156.04**
- BIG約312枚 / REG約104枚
- 天井: **なし**
- 50枚ベース: `UNVERIFIED_AFTER_RESEARCH`

### 導入日CONFLICT
- HAZUSE: **2018-02-12**
- DMMぱちタウン: **2018-02-13(火)**
- 5号機クロニクル: **2018/1**
- exact dayを持つHAZUSEをcanonicalとして2018-02-12採用。DMMとの差は地域差等を断定せず`CONFLICT_RELEASE_DATE_2018_02_12_VS_2018_02_13`として保持。
- 後年回顧DBの2018/1は`CONFLICT_RETROSPECTIVE_RELEASE_MONTH_2018_01`として別保持。

### resetBehavior v0.7
- ノーマルAで天井・ゲーム数解除・AT/ART/CZは確認されず、それらに対する設定変更/据え置き/純電断のカウンタ処理はN/A。
- 設定変更時の成立済みボーナス/告知状態/初期出目/低レベル内部状態は、表記揺れ・型式名・メーカー名と「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」を組み替えて再探索したが`UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の同項目も`UNVERIFIED_AFTER_RESEARCH`。
- 据え置きを純電断と独立条件で固定した本機固有資料は`UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`。
- 本機固有ガックン発生条件/確率、初期出目、ランプ等による確定変更判別は`UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用天井短縮、朝一専用モード、初当たり優遇、主要出玉恩恵/不利、公開reset専用数値は`NOT_APPLICABLE`または`NONE_CONFIRMED_AFTER_RESEARCH`。
- BIG中チェリー、REG中サイドランプ、ボーナス終了時王冠ランプは通常の設定推測要素であり、設定変更判別とは混同しない。

## 2018-02月境界監査
- 2018-02-19群は `パチスロ GATE` / `超速回胴 鬼若弁慶` / `コンチネンタルゼロ` の3機を処理済みでCLOSED維持。
- その前方漏れだった`トリプルクラウンZEROII SECOND EDITION`をNo.1176で回収済み。
- 2-9伝説の2018年導入一覧は2/19群の次を**2018-03-05**へ進めており、今回の再検索でも2/26の独立した確定導入群は固定できなかった。
- 現時点で3/5のパチスロ候補として`超GANTZ`、`ビッグアップ`、`ニューシオサイ`を確認。HAZUSEは少なくとも`超GANTZ`と`ビッグアップ`を2018-03-05と直接掲載。
- 次回は3/5群を全メーカー・別スペック横断監査し、実際の先頭未登録機種からNo.1177として処理する。2-9伝説の掲載順だけで採番順を固定しない。

## 継続注意事項
- No.1176は2/12 vs 2/13のexact day競合を解消したことにしない。canonicalとCONFLICTを併存させる。
- DMMの「朝イチ準備中」を設定変更挙動の不存在と読み替えない。再探索後に固定できなかった項目のみUNVERIFIED/NONE_CONFIRMEDとする。
- 前作`トリプルクラウン ZERO II-30`と基本仕様共通というDMM記述から、resetBehavior未公開値を自動転記しない。
- ノーマルA機の成立済みボーナス/低レベル状態の設定変更・純電断挙動を一般論から補完しない。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1176を再取得。
2. **1176件 / chronologicalFrontier 2018-02-19 / 2/19群CLOSED / 2/12遡及漏れRECOVERED** を正本として継続。
3. **2018-03-05群**を全メーカー・別スペック・地域差まで横断監査。
4. 既確認候補`超GANTZ` / `ビッグアップ` / `ニューシオサイ`を既存mainと突合し、実際の先頭未登録機種からNo.1177としてperformance core + resetBehavior v0.7で処理。
5. 3/5群完走後にCLOSED判定して次の未処理日付群へ前進。
6. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1176 トリプルクラウンZEROII SECOND EDITION
- HAZUSE: https://hazuse.com/machine/pachislot/7S1011/
- P-WORLD: https://www.p-world.co.jp/machine/database/8565
- DMMぱちタウン: https://p-town.dmm.com/machines/3240
- 5号機クロニクル: https://5goki.com/seiryu
- P-WORLD業界ニュース / グリーンべると転載: https://news.p-world.co.jp/articles/13945/greenbelt

### 次候補 / 境界監査
- 2-9伝説 新台一覧: https://29den.com/newslot/
- HAZUSE 超GANTZ: https://hazuse.com/machine/pachislot/7S1534/
- HAZUSE ビッグアップ: https://hazuse.com/machine/pachislot/7S1505/
