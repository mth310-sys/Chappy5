# No.1159 イミソーレXX

- recordStatus: `PARTIAL_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: イミソーレXX
- aliases: `イミソーレ2R`, `イミソーレ2R-XX`
- manufacturer: エマ
- releaseDateCanonical: 2017-11（exact day `UNVERIFIED_AFTER_RESEARCH`）
- generation: 5号機
- systemType: ノーマルタイプ / 完全告知 / BIG後100G小役ナビ
- formalModelName: `イミソーレ2R`
- retailerModelLabel: `イミソーレ2R-XX`
- certificationNumber: `7S0671`
- collectedAt: 2026-09-10

## identificationAndReleaseEvidence
- P-WORLDは本機を「イミソーレXX」、型式`イミソーレ2R`、検定番号`7S0671`、導入開始`2017年11月`として登録。
- 2017年11月P-WORLD導入カレンダーにも、同月のパチスロ5機種の1機として「イミソーレXX」を独立掲載。
- 中古実機DBでは商品型式ラベル`イミソーレ2R-XX`として流通。
- 2017-08-07導入の30Φ「イミソーレ3V-30」（HAZUSE表示名イミソーレXX30、検定7S0676）とは型式・検定番号が異なる別スペック。
- 日単位の導入日は「イミソーレXX / イミソーレ2R / 7S0671 / 2017年11月 / 導入日 / 新台 / 納品」を組み替え、P-WORLD、導入カレンダー、年表、解析、実機DBまで再探索したが固定できず、月単位のみcanonicalとする。

## performanceCore

### payoutRateBySetting
- setting1: 96.5%
- setting2: 97.9%
- setting3: 100.1%
- setting4: 103.1%
- setting5: 105.8%
- setting6: 109.0%

### bigBonusBySetting
- setting1: 1/235.7
- setting2: 1/234.1
- setting3: 1/232.4
- setting4: 1/230.8
- setting5: 1/229.1
- setting6: 1/227.6

### regularBonusBySetting
- setting1: 1/481.9
- setting2: 1/409.6
- setting3: 1/360.1
- setting4: 1/318.1
- setting5: 1/287.4
- setting6: 1/260.1

### bonusCombinedBySetting
- setting1: 1/158.3
- setting2: 1/148.9
- setting3: 1/141.3
- setting4: 1/133.7
- setting5: 1/127.5
- setting6: 1/121.4

### baseGamesPer50
- `UNVERIFIED_AFTER_RESEARCH`
- 「50枚 / 1000円 / コイン持ち / ベース / はながさタイム」を含めて検索したが、通常時50枚ベースとして比較可能な明示値を固定できなかった。

### netIncrease
- `NOT_APPLICABLE_AS_AT_ART_NET_INCREASE`
- P-WORLDは「ATやARTなどが搭載されていないノーマルタイプ」と明記。
- BIG後100Gの「はながさタイム」は小役ナビによるコイン持ちアップゾーン。中古実機DBが便宜上「AT」と表記するため、名称上のCONFLICTは下記に保持し、ART/AT初当たりとして扱わない。

### basicPayout
- BIG: 約286枚（315枚を超える払い出しで終了）
- REG: 約104枚（105枚を超える払い出しで終了）
- BIG後: 100G「はながさタイム」

### ceiling
- ゲーム数天井を明示する解析を固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- ノーマル機であることだけから「天井なし」と推測確定しない。

## modeSpecificMinimumData
- ボーナスメインの完全告知ノーマル。
- BIG後100Gはミニビスカスによる小役ナビ「はながさタイム」でコイン持ちがアップ。
- 通常ゲーム数解除モード / CZ / ART初当たり管理は確認されていない。

## resetBehavior

### settingChangeBehavior
- 設定変更後（朝一）最初のBIGでは、BIG中の白ミニビスカス点灯時に逆押しした際の第3停止ミニビスカス色による設定示唆の信頼度が大幅に上がる。
- 点灯色の序列は青＜黄＜緑＜赤の順に高設定示唆。
- 設定変更に伴う内部ゲーム数、成立役、はながさタイム等の低レベル状態のリセット契約は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時に前日ゲーム数・ボーナス成立状態・BIG後100Gはながさタイム等をどう扱うかを直接比較した本機固有資料は、検索語・資料系統を変えても固定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ON時の内部状態・はながさタイム残G・初回BIG設定示唆フラグ等の契約は `UNVERIFIED_AFTER_RESEARCH`。
- 据え置きと純電断を一般論で同義化しない。

### gameCounterReset
- ゲーム数天井/解除カウンタを公開資料で確認できず、`NOT_APPLICABLE_TO_CONFIRMED_GAME_COUNT_CEILING`。
- 低レベル表示ゲーム数の電断/変更挙動はUNVERIFIED。

### ceilingAfterReset
- 設定変更専用の天井短縮・変更数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 朝一専用ゲーム数モード / モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 高確/低確/CZなどの設定変更専用内部状態は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ボーナス成立等の低レベル状態は推測せずUNVERIFIED。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_NORMAL_TYPE_NO_CONFIRMED_ADVANTAGEOUS_SECTION_GAMEPLAY`

### resetBenefits
- 出玉面の天井短縮・朝一高確・初当たり優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 情報面では設定変更後最初のBIG中ミニビスカス色の設定示唆信頼度が大幅アップするため、朝一客の設定推測に影響する。

### resetPenalties
- 設定変更固有の公開された出玉上の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一最初のBIG中、白ミニビスカス点灯時に逆押しし、第3停止色を確認することで設定変更後の設定推測精度が上がる。
- P-WORLDは「設定変更後or初回のBIG BONUSに限り信頼度が大幅アップ」と記載。
- 青＜黄＜緑＜赤の順に高設定示唆。
- 色別の設定変更専用振り分け/信頼度数値は再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ガックン、初期出目、告知ランプによる設定変更確定契約も `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- settingChangeFirstBIGColorOrder: `blue < yellow < green < red`（高設定示唆強度）
- settingChangeFirstBIGColorDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetSpecificCeiling: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificInitialHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`

## conflicts
- `はながさタイム`の分類:
  - P-WORLD: AT/ART非搭載のノーマルタイプ、BIG後100Gの「コイン持ちアップゾーン」。
  - 中古実機ピーボム: 100Gの「AT」と表記。
  - 本DBでは規格/性能比較上P-WORLDのノーマル分類をcanonicalとし、小役ナビ区間をART/AT初当たりへ混ぜない。`CONFLICT_NOMENCLATURE_HANAGASA_TIME_AT_VS_NORMAL_NAV_ZONE`として保持。
- 30Φイミソーレ3V-30（7S0676）と本機イミソーレ2R（7S0671）は別型式。性能値が一致してもレコードを統合しない。

## sources
取得日: 2026-09-10

1. P-WORLD — イミソーレXX
   - https://www.p-world.co.jp/machine/database/8539
   - エマ、5号機ノーマル/完全告知、BIG約286枚、REG約104枚、BIG後100Gはながさタイム、設定別BIG/REG/合算/機械割、設定変更後/初回BIG時の色示唆、型式`イミソーレ2R`、検定`7S0671`、導入2017年11月。
   - confidence: `INDUSTRY`

2. P-WORLD — 2017年11月新台カレンダー
   - https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2017-11
   - 同月パチスロとしてイミソーレXXを独立掲載。30Φ版とは別機種。
   - confidence: `INDUSTRY`

3. ピーボム — イミソーレ2R-XX 実機DB
   - https://www.bomb-slot.jp/view/item/000000000649
   - `イミソーレ2R-XX`商品型式ラベル、BIG約286枚/REG約104枚、BIG後100Gはながさタイム。30Φ3V-30を関連商品として別掲載。
   - confidence: `SECONDARY_PRODUCT_DB`

4. HAZUSE — イミソーレXX30 / イミソーレ3V-30
   - https://hazuse.com/machine/pachislot/7S0676/
   - 30Φ別型式`イミソーレ3V-30`、検定`7S0676`、導入2017-08-07。本機との同一性能値照合と別型式識別に利用。本機へ導入日/型式を転記しない。
   - confidence: `ANALYSIS_HIGH`

5. パチ7回顧 — イミソーレXX
   - https://pachiseven.jp/columns/column_detail/22855
   - 2017年11月導入、30Φ3V-30が先行しXXが別に登場したとの回顧。補助証拠としてのみ利用。
   - confidence: `RETROSPECTIVE_SINGLE`

## missingFields
- exactReleaseDay: `UNVERIFIED_AFTER_RESEARCH`
- baseGamesPer50: `UNVERIFIED_AFTER_RESEARCH`
- explicitCeilingContract: `NONE_CONFIRMED_AFTER_RESEARCH`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- settingChangeFirstBIGColorDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetDetectionGakkun: `UNVERIFIED_AFTER_RESEARCH`

## researchNotes
- `イミソーレXX / イミソーレ2R / イミソーレ2R-XX / 7S0671`に加え、「導入日」「2017年11月」「50枚」「ベース」「コイン持ち」「天井」「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「BIG 色」「ミニビスカス」「振り分け」「ガックン」を組み替えて再探索。
- P-WORLD本機ページ、月間カレンダー、中古実機DB、30Φ専用HAZUSE、回顧資料まで横断したが日単位導入日・通常時50枚ベース・純電断契約・色別変更専用数値は固定できずUNVERIFIED。
- 8月の`イミソーレ3V-30`と性能値が一致しても、検定番号/型式が違うため物差しDBでは独立個体として保持する。
