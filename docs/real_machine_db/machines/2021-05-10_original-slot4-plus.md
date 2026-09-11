# ORIGINAL SLOT4 PLUS

No: 1413
machineName: ORIGINAL SLOT4 PLUS
machineNameVariants: オリスロ4 PLUS / Sオリスロ4 / ORIGINAL SLOT4 PLUS
manufacturer: JPS（ジェイピーエス）
releaseDate: 2021-05-10
formalModelName: Sオリスロ4AA
certificationNumber: 0S1493
pbMachine: true

generation: 6号機
systemType: ノーマル / 完全告知 / 技術介入・小役フォロー型

## identity / release
- P-WORLD機種DBでメーカーJPS、型式 `Sオリスロ4AA`、検定番号 `0S1493`、導入開始2021-05-10を確認。
- 2021年5月当時資料でもJPSのPB機「オリスロ4 PLUS」として5月10日リリース予定を確認。
- 2021年攻略誌掲載機種にも「オリスロ4 PLUS」が存在し、2021年機として整合。
- 同一型式 `Sオリスロ4AA` は2022-02-21に別PB名「メルヘンクエスト」として再展開された資料がある。2021年の本レコードとは導入法人・名称・時期を分離し、型式同一の後年PB派生として扱う。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
### 一般遊技時 / 市場出率系
| 設定 | 出玉率 |
|---:|---:|
| 5 | 99.4% |
| 6 | 100.6〜100.7% |
| P | 102.3〜102.4% |
- 2021年販売機種一覧は 99.4 / 100.7 / 102.4%。同一型式の後年PB資料は 99.4 / 100.6 / 102.3%。丸め差として保持。

### 成立小役全取得 / 完全攻略時
| 設定 | 出玉率 |
|---:|---:|
| 5 | 101.6〜101.7% |
| 6 | 103.1〜103.2% |
| P | 105.1〜105.2% |
- P-WORLDは「成立小役を全て獲得した場合」101.7 / 103.2 / 105.2%。同一型式資料では完全攻略101.6 / 103.1 / 105.1%。
- 定義差を混ぜず、一般遊技時と完全攻略時を分離。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 5 | 1/172.5（P-WORLD丸め1/172） | 1/436.9（同1/437） | 1/123.7（同1/123） |
| 6 | 1/218.5（同1/218） | 1/218.5（同1/218） | 1/109.2（同1/109） |
| P | 1/218.5（同1/218） | 1/218.5（同1/218） | 1/109.2（同1/109） |
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約36G/50枚。
- 2021年ORIGINAL SLOT4 PLUSのP-WORLD本文ではベース数値を確認できなかったが、同一正式型式 `Sオリスロ4AA` の後年PB「メルヘンクエスト」資料で約36回転/50枚を確認。型式・BIG/REG確率・獲得枚数・攻略時出率が一致するため、型式共通性能値として採用する。
- reliability: ANALYSIS_SINGLE / SAME_FORMAL_MODEL_CROSSCHECK

## netIncrease
- NOT_APPLICABLE。AT/ART非搭載の純ボーナスノーマル機。

## basicPayout
- BIG BONUS: 210枚超払い出し終了、純増195枚。
- REG BONUS: 105枚超払い出し終了、純増104枚。
- reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はボーナスのみで出玉を増やす完全告知ノーマルタイプ。AT/ART、ゲーム数モード、天井モードは非搭載。
- PLUSシステム: 小役取得1枚につき1ptを蓄積し、累積ポイントでステータスが上昇。ステータス上昇に応じ小役告知割合が増える。
- 同一型式の後年解析では500ptごとにステータス昇格、0 / 500 / 1000 / 1500 / 2000pt帯で告知割合0 / 30 / 50 / 70 / 99.9%が確認されるが、2021年PB版で同数値を直接記した当時資料は今回未固定のため、完全再現用数値としては転記しない。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_APPLICABLE_RESET_CORE_WITH_PLUS_POINT_POWER_STATE_UNVERIFIED
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- ノーマル機のためゲーム数天井・AT/ARTモード・有利区間天井のリセット恩恵は非該当。
- 後年の6号機リセット一覧では本機の「リセット恩恵は特になし」と整理される。
- PLUSシステムの累積ポイント/ステータスが設定変更で初期化されるかについて、機種名・正式型式・JPS・設定変更・リセット・朝一・ポイント・PLUSシステム等で再探索したが、本機固有の直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_SINGLE / UNVERIFIED_AFTER_RESEARCH

### carryOverBehavior
- 天井・ゲーム数モードは非搭載のためCARRY_OVER対象なし。
- PLUSシステム累積ポイント/ステータスの据え置き時保持については直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 電源OFF→ONのみで天井・AT状態等に影響する構造は非該当。
- PLUSシステム累積ポイント/ステータスの純電断後保持/初期化は、表記揺れ・型式名・後年同型式PBまで横断しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- NOT_APPLICABLE。ゲーム数天井非搭載。
- 通常ゲーム数はボーナス抽選確率に影響する天井進行値ではない。

### ceilingAfterReset
- NOT_APPLICABLE。本機は天井非搭載。
- 設定変更後の短縮天井も存在しない。
- reliability: ANALYSIS_SINGLE

### modeAfterReset
- NOT_APPLICABLE。AT/ART用の内部モード、天井モード、朝一専用モードは非搭載。
- PLUSシステムのステータスは遊技補助状態として別項目扱いとし、リセット契約は未固定。

### stateAfterReset
- 出玉に直結する通常/高確等の内部状態は非該当。
- PLUSシステムの累積ポイント/ステータスのみ状態要素として存在するが、設定変更時の初期化値・据え置き/純電断時の保持契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- NOT_APPLICABLE。本機はボーナスのみで出玉を増やす6号機ノーマルタイプで、AT/ART有利区間進行を物差し上管理する必要なし。

### resetBenefits
- 公開資料上、設定変更専用の主要恩恵は確認されず「特になし」。
- 天井短縮、朝一CZ、朝一モード優遇等は非搭載/非該当。

### resetPenalties
- 設定変更専用の出玉上の主要不利要素は確認されない。
- PLUSシステムポイントが初期化される場合は小役告知支援の蓄積を失う可能性があるが、初期化契約そのものを固定できないため推定で欠損を埋めない。

### resetDetection
- 本機固有の設定変更時リールガックン、朝一表示、セグ/PLUSランプ等による確定的な変更判別契約は、表記揺れ・型式名・JPS・朝一・ガックン・リセット・設定変更で再探索しても高信頼の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井/有利区間ランプによる変更判別は構造上非該当。

### numericResetData
- `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。
- 設定変更時のモード振り分け、短縮天井、朝一当選率、恩恵発生率は非搭載/非該当。

## missingFields
- PLUSシステム累積ポイント/ステータスの設定変更時初期化契約。
- PLUSシステム累積ポイント/ステータスの据え置き・純電源OFF→ON時保持契約。
- 本機固有のガックン/朝一表示による設定変更判別。

## conflicts
- 出玉率は「一般遊技時」と「成立小役全取得/完全攻略時」で定義差があるためCONFLICTではなく別定義として分離。
- 同一定義内の100.6/100.7、102.3/102.4、101.6/101.7、103.1/103.2、105.1/105.2は資料の丸め差として保持し平均しない。
- 2022年「メルヘンクエスト」は同一型式 `Sオリスロ4AA` だが別法人PB・別導入時期。2021年「ORIGINAL SLOT4 PLUS」の別名として統合せず、後年PB派生として分離する。

## sources
取得日: 2026-09-12
- https://www.p-world.co.jp/machine/database/9395 — ORIGINAL SLOT4 PLUS / JPS / 6号機ノーマル / 型式Sオリスロ4AA / 検定0S1493 / 2021-05-10 / BIG・REG・攻略時機械割・獲得枚数・PLUSシステム
- https://psumma.jp/pachislo/51658/ — 2021年5月JPS PB機、5/10リリース予定、設定5/6/P、攻略時100%超
- https://sulocale.sulopachinews.com/archives/20825 — 2021年販売機種一覧、オリスロ4 PLUSのBIG/REG・一般出玉率
- https://www.fujisan.co.jp/product/1219887/b/2100520/ — 2021年4月14日発売攻略誌掲載機種にオリスロ4 PLUS
- https://pachisuro100.com/reset/ — ORIGINAL SLOT4 PLUSのリセット恩恵「特になし」
- https://pachisuro100.com/tenjyo/ — ORIGINAL SLOT4 PLUS天井非搭載
- https://pachinko-curation.com/28698/ — 同一型式Sオリスロ4AA後年PB、約36G/50枚、一般/完全攻略出率、精密BIG/REG、2022別PBとしての再展開
- https://hazuse.com/machine/pachislot/SX0044/ — 後年同型式PB「メルヘンクエスト」、オリスロ4 PLUSベース、PLUSシステム補助確認

## researchNotes
- 欠損判定前に `ORIGINAL SLOT4 PLUS` / `オリスロ4 PLUS` / `Sオリスロ4` / `Sオリスロ4AA` / `JPS` と、`設定変更` / `リセット` / `据え置き` / `電源OFF` / `朝一` / `ガックン` / `PLUSシステム` / `ポイント` / `50枚` / `ベース` を組み替えて再探索。
- 公式JPS現行ページの直接性能表は今回検索上固定できなかったため、P-WORLD、当時販売資料、攻略誌掲載、後年同型式PB資料を相互照合。
