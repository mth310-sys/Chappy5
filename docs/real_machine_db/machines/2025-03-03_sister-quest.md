# Sister Quest

recordNo: 1710
machineName: Sister Quest
aliases: シスタークエスト / スマスロ シスタークエスト / シスクエ
manufacturer: カルミナ
formalModel: LシスタークエストCA
inspectionCode: 430730
releaseDate: 2025-03-03
generation: 6.5号機 / スマスロ / AT
systemType: CZ + 差枚数管理型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- カルミナ公式製品ページは2025.03製品として掲載。カルミナの発売プレスリリースは2025-03-03（月）より全国導入開始予定と明記。
- HAZUSEは型式 `LシスタークエストCA`、検定番号 `430730`、導入開始日2025-03-03を掲載。
- 1geki、パチマガスロマガ、必勝本、情報島＋も2025-03-03導入で一致。
confidence: OFFICIAL + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.5%
- setting3: 100.2%
- setting4: 103.8%
- setting5: 107.0%
- setting6: 111.2%
initialHitBySetting:
  czQuestBattle:
  - setting1: 1/317.3
  - setting2: 1/308.0
  - setting3: 1/299.2
  - setting4: 1/284.2
  - setting5: 1/278.0
  - setting6: 1/267.0
  atAdventureRush:
  - setting1: 1/470.0
  - setting2: 1/456.3
  - setting3: 1/436.9
  - setting4: 1/403.2
  - setting5: 1/389.9
  - setting6: 1/367.0
baseGamesPer50: 約33.3G/50枚
netIncrease:
- 冒険RUSH: 約3.0枚/G
- 超冒険RUSH: 約5.0枚/G
basicPayout:
- 冒険RUSH: 差枚数管理型。突入時に「一撃必殺 快刀乱麻」または「慈愛の祈り」で初期差枚数を決定。
- 超冒険RUSH: 上位AT、純増約5.0枚/G。突入時期待獲得枚数は設定1で約3200枚（メーカー発表紹介・主要解析値。比較補助値）。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は毎ゲームEXPを獲得し、規定EXP到達等からCZ「クエストバトル」を目指す。
- CZ間天井: 最大1400EXP+αでCZ当選。
- CZスルー回数天井: AT間でCZを最大5回スルーすると、次回6回目CZでAT当選。
- AT間天井: 最大2000G+αでAT当選。通常時は999G+α / 2000G+αの振り分けがあり、設定変更時を除く999G選択率は設定1 0.8% / 2 5.5% / 3 10.2% / 4 10.9% / 5 11.7% / 6 12.5%。
- 通常時モード: A / B / C / D / E。モードEは最大200EXP+α。
- 有利区間リセット契機: 設定変更時、エンディング終了後。設定変更以外の有利区間リセット後は上位AT「超冒険RUSH」当選恩恵があるが、設定変更時は除外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_CHANGE_CARRY_POWER_TABLES
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: RESET。
- AT間天井: RESETし999G+αへ短縮。
- 規定EXP / CZ間天井: RESETし最大500EXP+αへ短縮。
- モード: 再抽選。モードB以上が高確率で選択される専用振り分け。
- 内部状態: RESET。
- EXP: RESET。
- 開始ステージ: 帝国街道。
- CZスルー回数の設定変更時挙動は、主要機種別比較表で独立項目として直接固定できなかったため、一般論から補完せず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MACHINE_SPECIFIC

### carryOverBehavior
- 据え置き: 有利区間、天井、モード、内部状態、EXPを引き継ぐ。
- なな徹の設定変更/据え置き比較表で機種別に直接確認。
- CZスルー回数は通常のAT間進行要素だが、据え置き比較表に独立した直接記載を固定できなかったため `UNVERIFIED_AFTER_RESEARCH` とし、推測転記しない。
confidence: ANALYSIS_HIGH_FOR_LISTED_ITEMS / UNVERIFIED_FOR_CZ_SKIP_COUNT

### powerCycleBehavior
- 電源OFF→ONのみ: 内部状態と規定EXPを引き継ぐ。
- 1gekiの設定変更/電源ON-OFF比較表で直接確認。
- 液晶上のEXP表示はリセットされるが、内部規定EXPは引き継ぐ。
- ステージは引き継ぎ扱い。ただし通常時ステージに滞在していた場合は帝国街道ステージになる。
- 純電源OFF→ON時のAT間天井G数、モード、有利区間、CZスルー回数について、機種固有の直接並列表記を十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。一般的なスマスロ挙動から補完しない。
confidence: ANALYSIS_HIGH_FOR_STATE_EXP_STAGE / UNVERIFIED_FOR_OTHER_INTERNAL_ITEMS

### gameCounterReset
- 設定変更: RESET。AT間天井は999G+αへ短縮。
- 据え置き: 天井をCARRY_OVER。
- 電源OFF→ON: 規定EXPの内部値はCARRY_OVERだが液晶EXP表示はRESET。AT間実G天井の純電断時挙動は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CHANGE_CARRY_EXP / UNVERIFIED_FOR_POWER_CYCLE_AT_G

### ceilingAfterReset
normalCzCeiling: 最大1400EXP+α
resetCzCeiling: 最大500EXP+α
normalAtCeiling: 最大2000G+α（通常時は999G+α振り分けあり）
resetAtCeiling: 999G+α固定
czSkipCeiling: AT間でCZ最大5回スルー後、6回目CZでAT当選
ceilingBenefits:
- CZ間: CZ当選
- AT間: AT当選
- CZスルー: 次回CZでAT当選
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時モード振り分け:
  - modeA: 17.9%
  - modeB: 69.5%
  - modeC: 0.02%
  - modeD: 0.02%
  - modeE: 12.5%
- モードB以上合計は約82.04%。公開資料の丸め表記では「約82.0%」。
- 据え置き: 前日モードを引き継ぐ。
- 純電源OFF→ON: モードの機種固有直接記載は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_DIRECT

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き: 内部状態CARRY_OVER。
- 電源OFF→ON: 内部状態CARRY_OVER。
confidence: ANALYSIS_HIGH / DIRECT_MACHINE_SPECIFIC

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ON: 機種固有の直接記載を十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- エンディング終了後の有利区間リセットでは上位AT「超冒険RUSH」へ移行する恩恵があるが、解析資料は明確に「設定変更時を除く」としているため朝一恩恵へ混入しない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY / UNVERIFIED_FOR_POWER_CYCLE

### resetBenefits
- AT間天井が最大2000G+α → 999G+αへ短縮。
- CZ間天井が最大1400EXP+α → 最大500EXP+αへ短縮。
- モードB以上が約82.04%（公開丸め約82.0%）で選択され、通常より早い規定EXP到達に期待できる。
confidence: ANALYSIS_HIGH / PUBLIC_NUMERIC_DIRECT

### resetPenalties
- 設定変更で前日の天井進行、モード、内部状態、EXPを初期化するため、据え置きなら残る前日進行・有利状態を失う可能性がある。
- 設定変更以外の有利区間リセット後に付く「超冒険RUSH」直行恩恵は設定変更時には適用されない。
- 設定変更固有の数値化された不利率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_LOSS / PUBLIC_VALUE_NOT_FOUND_FOR_RATE

### resetDetection
- なな徹の機種別「リセット判別」は2025-04-09時点で「現在調査中」。
- 電源OFF→ONでも液晶EXP表示はリセットされ、通常時ステージなら帝国街道になるため、液晶EXPや朝一ステージだけでは設定変更確定に使えない。
- 設定変更時はCZ間最大500EXP+α、AT間999G+αに短縮されるため、条件を超えてなお未発動なら据え置き推測材料になる。ただしEXPは1G=1EXPに加えてモンスター撃破等で複数獲得するため、液晶表示だけで単純な実G換算判定をしない。
- 本機固有のリールガックン条件・発生率は、機種名 / 型式 `LシスタークエストCA` / カルミナ と「ガックン・設定変更・リセット・朝一・据え置き・電源OFF ON」を組み替え、主要解析・旧DB・回顧系を横断したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_DISPLAY_LIMITS / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalCzCeiling: 1400EXP+α
resetCzCeiling: 500EXP+α
normalAtCeiling: 2000G+α maximum
resetAtCeiling: 999G+α
resetModeDistribution:
- A: 17.9%
- B: 69.5%
- C: 0.02%
- D: 0.02%
- E: 12.5%
resetModeBOrHigherApprox: 82.04%（丸め表記約82.0%）
normalAtCeiling999GSelectionExceptReset:
- setting1: 0.8%
- setting2: 5.5%
- setting3: 10.2%
- setting4: 10.9%
- setting5: 11.7%
- setting6: 12.5%

## conflicts
- 導入台数は1gekiが約4,000台、マルっとWAVE等が約5,000台とするが、導入台数は現ミッション必須項目外のため性能コアへ採用せず `CONFLICT_INSTALL_COUNT_4000_VS_5000` として注記のみ保持。
- 型式表記を一部サイトが簡略 `L Sister Quest` とする一方、HAZUSEは `LシスタークエストCA` / 検定番号430730を掲載。本DBは検定型式をcanonicalとする。

## missingFields
- 設定変更時のCZスルー回数リセット/引継ぎ: UNVERIFIED_AFTER_RESEARCH
- 据え置き時のCZスルー回数の直接記載: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時のAT間実G天井、モード、有利区間、CZスルー回数: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更固有の数値化された不利率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- カルミナ公式製品ページ: https://carmina-gaming.co.jp/product/sister-quest/
- カルミナ発売プレスリリース転載（Dream News）: https://www.dreamnews.jp/press/0000312148
- HAZUSE 型式/検定/導入/純増: https://hazuse.com/machine/pachislot/SX0097/
- 1geki オンライン遊技説明/性能コア: https://1geki.jp/slot/l_sisterquest/39/
- 1geki 天井/朝一/設定変更/電源ON-OFF: https://1geki.jp/slot/l_sisterquest/3/
- 1geki 通常時モード: https://1geki.jp/slot/l_sisterquest/43/
- 1geki AT: https://1geki.jp/slot/l_sisterquest/81/
- 1geki 上位AT: https://1geki.jp/slot/l_sisterquest/95/
- 1geki ベース/小役: https://1geki.jp/slot/l_sisterquest/4/
- なな徹 朝一/設定変更/据え置き/有利区間: https://nana-press.com/kaiseki/machine/906/27933/
- なな徹 狙い目/モード補助: https://nana-press.com/kaiseki/machine/906/27931/
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/86479/
- パチ&スロ必勝本 狙いドコロ/天井: https://hisshobon.com/machineinfo/86437/
- パチ&スロ必勝本 AT間天井振り分け: https://hisshobon.com/machineinfo/86438/
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/carmina_slot/07/kh01.php
- 情報島＋ 基本スペック: https://p-johojima.jp/new_machine/post-603/
- マルっとWAVE 導入/基本スペック: https://marutto-w.com/industry_news/20250304
- 6確 基本/朝一: https://www.kaku6.jp/slot/sisterquest/
- ぽこすろっと 有利区間/設定変更補助: https://www.nankaikoya.jp/sisterquest-kitaichi/
