# スマスロバジリスク～甲賀忍法帖～絆2 天膳 BLACK EDITION

recordNo: 1613
machineName: スマスロバジリスク～甲賀忍法帖～絆2 天膳 BLACK EDITION
aliases: Lバジリスク～甲賀忍法帖～絆2 天膳 BLACK EDITION / バジリスク絆2天膳 / 天膳BLACK
manufacturer: ミズホ / ユニバーサルエンターテインメント
formalModel: L／バジリスク絆2～天膳～／ZN
alternateApprovedModel: L／バジリスク絆2～天膳～／HZ（エレコ製・別検定通過型式）
inspectionCode: 330412（ZN）
releaseDate: 2023-12-18
generation: 6.5号機 / スマートパチスロ
systemType: AT / 疑似ボーナス経由・シナリオ管理セット継続
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- ALL7の2023年12月導入一覧で2023-12-18。
- 必勝本、HAZUSE、P-WORLD、一撃等の機種資料も2023-12-18で一致。
- 一部資料には2024-01-09等の分納日も併記されるが、初回導入日は2023-12-18として扱う。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 高知県公安委員会系の検定情報を報じた遊技日本で `L/バジリスク絆2～天膳～/ZN`（ミズホ）の検定通過を確認。
- HAZUSEは型式 `L／バジリスク絆2～天膳～／ZN`、検定番号 `330412` を掲載。
- 沖縄県公安委員会系の検定情報では `L／バジリスク絆2～天膳～／HZ`（エレコ製）も別型式として検定通過。市場導入機のcanonical型式はミズホZNを採用し、HZをalternateApprovedModelとして保持。
confidence: INDUSTRY_HIGH / ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- 1: 97.4%
- 2: 98.5%
- 3: 102.0%
- 4: 106.2%
- 5: 110.5%
- 6: 114.9%
initialHitBySetting:
- setting1: BC 1/124.7 / BT 1/418.1
- setting2: BC 1/123.2 / BT 1/405.0
- setting3: BC 1/119.2 / BT 1/362.4
- setting4: BC 1/113.6 / BT 1/311.2
- setting5: BC 1/108.5 / BT 1/278.5
- setting6: BC 1/105.0 / BT 1/247.3
baseGamesPer50: 約32G/50枚
netIncrease: BT 約2.9枚/G
basicPayout:
- バジリスクタイム（BT）: 1セット平均約40G（追想の刻＋争忍の刻）
- バジリスクチャンス（BC）: 16Gの疑似ボーナス
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- BC間ゲーム数天井: 333G+αでBC当選。
- BCスルー回数天井: 最大7回スルー後、8回目のBCでBT当選。
- 通常時モードはA/B/C/D。16種類のモードテーブルでBCごとのモードを管理し、設定変更時またはBT終了時にテーブルを抽選。
- 設定変更時はBCスルー天井が優遇され、浅いスルー回数でBT天井へ到達する可能性が上がる。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_NUMERIC_RESET_DISTRIBUTION_UNPUBLISHED
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は天井までのゲーム数・BC回数をRESET。
- モードを再抽選。
- 内部状態を再抽選。
- 宿怨ポイントを再抽選。
- 有利区間をRESET。
- BCスルー天井の規定回数が優遇される。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は、設定変更を行わない通常の営業跨ぎとして天井進行・BC回数、モード、内部状態、宿怨ポイント、有利区間をCARRY_OVERする扱い。
- 純電源OFF→ON比較表で天井・モード・状態・宿怨ポイントの引継ぎを直接確認しており、据え置き挙動と整合。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONのみでは天井までのゲーム数・BC回数をCARRY_OVER。
- モード、内部状態、宿怨ポイントもCARRY_OVER。
- ステージ表示は当時の必勝本比較表で「現在調査中」のため、見た目の復帰位置は `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は設定変更を伴わない純電断で継続扱いと整理するが、機種別比較表の項目に有利区間単独欄がないため `ANALYSIS_HIGH_INFERRED_FROM_NO_RESET_EVENT` として直接明示項目と区別する。
confidence: ANALYSIS_HIGH_FOR_GAMES_MODE_STATE_POINT / PARTIAL_FOR_DISPLAY_AND_EXPLICIT_ADVANTAGEOUS_SECTION_LINE

### gameCounterReset
- 設定変更時: BC間ゲーム数・BC回数RESET。
- 据え置き/電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- BC間天井そのものは333G+αで、設定変更専用のゲーム数天井短縮は確認されない。
- BCスルー回数天井は設定変更時に優遇される。
- 通常時は最大7回スルー後の8回目BCでBT。当該最大値より浅い規定回数が選ばれやすくなるのが主なリセット恩恵。
confidence: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時に16種類のモードテーブルを再抽選。
- 設定変更時はBCスルー天井が優遇されるテーブル選択となることが複数解析で一致。
- リセット専用の全16テーブル選択率・設定別振り分け率は、公式・業界・必勝本・一撃・なな徹・P-WORLD・HAZUSE・後年解析を再探索しても固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_NUMERIC_DISTRIBUTION

### stateAfterReset
- 設定変更時は内部状態を再抽選。
- 電源OFF→ON時は内部状態を引き継ぐ。
- 設定変更直後の通常/高確/超高確の具体的振り分け率は再探索後も `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR

### advantageousSectionReset
- 設定変更時に有利区間RESET。
- 通常稼働中はAT終了時の一部でも有利区間RESETが発生する。
- 設定変更時以外の有利区間RESETでは前兆を経由して宿怨チャレンジへ突入するが、なな徹はこの恩恵について「設定変更時を除く」と明記。したがって通常の有利区間切断恩恵を朝一設定変更恩恵へ流用しない。
confidence: ANALYSIS_HIGH

### resetBenefits
- BCスルー天井の規定回数が優遇され、通常より浅いBCスルー回数でBTへ到達する可能性が上がる。
- 設定変更時以外の有利区間RESET時に発生する宿怨チャレンジは、朝一設定変更の直接恩恵ではないため分離して扱う。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更時固有の主要な定量的不利要素は、再探索後も確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetDetection
- なな徹の機種別朝一資料ではリセット判別は「現在調査中」。
- 設定変更後と電源OFF→ONで天井/モード/状態/宿怨ポイントの契約は異なるが、外部表示だけで即時確定できる公開判別法は固定できない。
- 本機固有のリールガックン条件・発生率は、機種名/型式/メーカー＋「ガックン」「設定変更」「リセット」「据え置き」「電源OFF ON」等で再探索後も高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプによる確実な朝一変更判別は、スマスロの本機で利用できる公開方法を確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: UNVERIFIED_DETECTION_AFTER_RESEARCH

### numericResetData
- BC間天井: 333G+α。
- 通常最大BCスルー天井: 7回スルー後、8回目BCでBT。
- 設定変更時: BCスルー規定回数優遇。
- リセット専用テーブル選択率/各スルー回数振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- 公開固定数値として確認できる通常天井基準: BC間333G+α / 最大7スルー後8回目BCでBT。
- 設定変更専用の各BCスルー回数選択率・テーブル選択率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- 型式はミズホ `ZN` とエレコ `HZ` の2型式が検定通過している。平均化や同一型式扱いをせず、市場機のcanonicalをZN、HZをalternateApprovedModelとして保持。
- 一部後年まとめにAT純増約4枚/G等の誤記/別定義が見られるが、必勝本・HAZUSE・一撃・複数当時資料で約2.9枚/Gが一致するためcanonicalは2.9枚/G。

## missingFields
- reset-specific 16-table selection rates: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- reset-specific initial state distribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- morning display-stage contract: UNVERIFIED_AFTER_RESEARCH
- machine-specific gackun condition/rate: UNVERIFIED_AFTER_RESEARCH

## groupAudit
- 2023-12-18群はALL7で本機、`ドラゴンハナハナ～閃光～-30`、`パチスロファイヤードリフト` の3機を確認。
- 当時導入一覧・機種DBを横断し、現時点のcanonical候補は3機。残る2機処理後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## sources
取得日: 2026-09-13
- ALL7 2023年12月導入予定一覧: https://www.all7.jp/plans/index/2023/12
- 遊技日本 ZN検定通過: https://news.p-world.co.jp/articles/25838/nippon
- グリーンべると HZ検定通過: https://news.p-world.co.jp/articles/25745/greenbelt
- HAZUSE 型式/検定番号/基本仕様: https://hazuse.com/machine/pachislot/SX0060/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/82194/
- 必勝本 天井&設定変更/電源OFFON比較: https://hisshobon.com/machineinfo/82192/
- 一撃 天井・リセット恩恵: https://1geki.jp/slot/l_b_kizuna2_tnzn/3/
- なな徹 朝一・設定変更・有利区間: https://nana-press.com/kaiseki/machine/666/18320/
- なな徹 天井詳細: https://nana-press.com/kaiseki/machine/666/18317/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9944
- パチビー 攻略情報: https://www.pachibee.jp/machines/kouryaku/223110002
- ちょんぼりすた モードテーブル: https://chonborista.com/slot/universal-slot/kizunatenzen/203964/

## status
- coreStatus: COMPLETE_CORE
- resetQaStatus: COMPLETE_RESEARCHED_WITH_NUMERIC_RESET_DISTRIBUTION_UNPUBLISHED
