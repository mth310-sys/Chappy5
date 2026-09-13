# パチスロ武装神姫

recordNo: 1620
machineName: パチスロ武装神姫
aliases: S武装神姫 / 武装神姫
manufacturer: KPE（販売・ブランド: コナミアミューズメント）
formalModel: S武装神姫PF
inspectionCode: 2S1739
releaseDate: 2024-01-09
generation: 6.5号機 / メダル機
systemType: AT / 周期育成 + CZ突破 / セット継続型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- コナミアミューズメント公式が2024-01-09のホール稼働開始を明記。
- 複数解析・新台カレンダーも2024-01-09で一致。
confidence: OFFICIAL

## modelEvidence
- コナミアミューズメント公式発売発表で製造元KPE株式会社を確認。
- 遊技通信系業界記事で型式名 `S武装神姫PF` / KPE製を確認。
- 東京都公安委員会検定通過まとめで `S武装神姫PF` / KPE / 検定番号 `2S1739` を確認。
confidence: INDUSTRY / PUBLIC_INSPECTION_REPORT

## corePerformance
payoutRateBySetting:
- 1: 97.3%
- 2: 98.5%
- 3: 99.8%
- 4: 102.3%
- 5: 104.2%
- 6: 108.1%
initialHitBySetting:
- setting1: CZ 1/91.2 / AT 1/282.1
- setting2: CZ 1/91.1 / AT 1/270.0
- setting3: CZ 1/91.1 / AT 1/258.0
- setting4: CZ 1/91.0 / AT 1/238.8
- setting5: CZ 1/90.7 / AT 1/204.4
- setting6: CZ 1/90.3 / AT 1/173.9
baseGamesPer50: 34.47G/50枚（約34.5G）
netIncrease: AT「神姫RUSH」約3.0枚/G / 上位AT「SUPER神姫RUSH」も約3.0枚/G
basicPayout:
- 神姫RUSH: 1セット20G+継続バトル（3～5G）
- セット継続率: 50% / 66% / 75% / 80% / 95%のいずれか
- SUPER神姫RUSH: セット継続率約95%（セットストックを除く）
- SUPER神姫RUSH突入時獲得期待枚数: 約3600枚（設定1、メーカー調べ）
- ヒキツギ条件成立時の上位AT再突入抽選: 約60%
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH; OFFICIAL_OR_INDUSTRY_FOR_MAJOR_AT_FEATURES

## modeSpecificMinimumData
- 通常時は20Gの育成パートを4or5セット消化し、CZ「神姫バトル」へ進む周期型。
- CZは設定1～6で約1/91、CZ勝利でAT「神姫RUSH」。
- CZスルー天井: CZ8連続敗北後、9回目のCZはAT当選濃厚。
- したがって固定ゲーム数天井ではなくCZスルー回数天井が中心。概算では1000G前後が目安となる場合があるが、ゲーム数固定天井として扱わない。
- 上位ATは有利区間のリセット有無だけに依存しない「ヒキツギATシステム」を搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN_AND_NO_NUMERIC_RESET_BONUS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- CZスルー天井RESET。
- 内部状態RESET。別資料では武装高確・逆押し高確もRESETと明記。
- 通常時開始ステージとしてセットアップステージへ移行するとする複数解析あり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- CZスルー天井CARRY_OVER。
- 内部状態CARRY_OVER。武装高確・逆押し高確もCARRY_OVERとする機種固有解析あり。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは、有利区間・天井（CZスルー回数）・内部モード/状態をCARRY_OVERとする機種固有比較資料を確認。
- 武装高確・逆押し高確もCARRY_OVERとする解析あり。
- 電断後の開始ステージについては一部資料が「調査中」であり、設定変更と同一と推測補完しない。
confidence: ANALYSIS_HIGH_FOR_CARRY_OVER_ITEMS / UNVERIFIED_FOR_START_STAGE

### gameCounterReset
- 固定ゲーム数天井は搭載せず、CZ8スルー後の9回目CZがAT天井相当。
- 設定変更時: CZスルー回数RESET。
- 据え置き / 純電源OFF→ON: CZスルー回数CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 設定変更時もCZスルー天井は通常どおりRESETされ、9回目CZでAT当選濃厚。
- 設定変更専用の短縮天井・スルー回数短縮は確認されず、複数解析では「特に恩恵なし / 天井短縮なし」と整理されている。
confidence: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時は内部モード/状態RESET、据え置き/純電断はCARRY_OVERとする解析を確認。
- 朝一専用モード名称や設定変更専用モード振り分け率など、比較可能な公開固定値は再探索後も確認できず。
confidence: ANALYSIS_HIGH_FOR_RESET_OR_CARRY / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH_FOR_DISTRIBUTION

### stateAfterReset
- なな徹: 設定変更で内部状態RESET、据え置きでCARRY_OVER。
- ぽこすろっと: 武装高確・逆押し高確は設定変更でRESET、電源OFF→ONでCARRY_OVER。
- 設定変更後専用の状態振り分け数値は公開固定値を確認できず。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き / 純電源OFF→ON時: CARRY_OVER。
- 本機の上位ATヒキツギ用内部高確率状態は「有利区間のリセット有無に左右されない」仕組みとされるが、これは通常の有利区間契約とは分けて記録する。
confidence: ANALYSIS_HIGH

### resetBenefits
- 設定変更後は通常時開始ステージであるセットアップステージへ移行するとする解析あり。
- セットアップステージは武装獲得高確率状態。
- 一方、天井短縮・CZスルー回数短縮などの明確な設定変更専用恩恵は確認されていない。
confidence: ANALYSIS_HIGH_FOR_START_STAGE / ANALYSIS_HIGH_FOR_NO_CEILING_SHORTENING

### resetPenalties
- 据え置きで保持されるCZスルー回数、武装高確、逆押し高確などは設定変更でRESETされるため、前日状況次第では設定変更が客側に有利とは限らない。
- 固定的な「リセット不利率」等の公開数値は確認できず。
confidence: ANALYSIS_HIGH_FOR_RESET_ITEMS / PUBLIC_VALUE_NOT_FOUND_FOR_NUMERIC_PENALTY

### resetDetection
- 朝一に周期の途中から開始した場合は据え置き濃厚とする解析あり。
- 設定変更後はセットアップステージ開始とする複数解析がある一方、見た目だけでは判別困難とする資料もあり、開始画面単独を確定判別には用いない。
- 前日CZスルー回数が把握できる場合、朝一の継続状況は据え置き推測材料になり得る。
- 本機固有のリールガックン条件・発生率は「武装神姫 / S武装神姫PF / KPE / コナミ」×「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン」で再探索したが、信頼できる機種固有契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_PERIOD_BEHAVIOR / UNVERIFIED_FOR_GACKUN

### numericResetData
- 設定変更専用の短縮天井数値: NONE_CONFIRMED（短縮なしとする解析）。
- 設定変更専用モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 設定変更専用朝一当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 通常CZスルー天井: 8スルー後、9回目CZでAT当選濃厚（設定変更で回数RESET）。

### publicMorningNumbers
- 朝一専用の当選率・モード振り分け・短縮天井などの比較可能な公開固定値は確認できず。
- 通常のCZスルー天井は9回目CZ（8スルー後）。これは設定変更専用数値ではない。

## conflicts
- AT初当たりについて、なな徹・一撃・パチ＆スロ必勝本は設定3 `1/258.0`、設定4 `1/238.8`、設定5 `1/204.4` で一致。一方、すろぱちくえすとは設定3 `1/261.0`、設定4 `1/245.1`（設定5は `1/204.4`）を掲載。複数高信頼解析の一致値をcorePerformanceに採用し、差異は平均化せずCONFLICTとして保持。
- CZ設定5は、なな徹・一撃が `1/90.7`、すろぱちくえすとが `1/90.3`。複数一致側の `1/90.7` をcorePerformanceに採用し、競合値を保持。
- 一部記事に導入日を「2023年1月9日」とする誤記があるが、コナミ公式が2024年1月9日のホール稼働開始を明記しており、releaseDateは2024-01-09をcanonicalとする。

## sources
取得日: 2026-09-13
1. コナミアミューズメント公式 — 新機種発売発表 / 製造元KPE / 2024年1月稼働予定
   - https://www.konami.com/amusement/corporate/ja/topics/20230925/
   - reliability: OFFICIAL
2. コナミアミューズメント公式 — アプリ告知 / 2024-01-09ホール稼働開始を明記
   - https://www.konami.com/amusement/corporate/ja/topics/20231225/
   - reliability: OFFICIAL
3. コナミアミューズメント公式機種サイト
   - https://www.konami.com/amusement/psm/slot/busou-shinki/00_top.html
   - reliability: OFFICIAL
4. 遊技通信web — 東京都公安委員会検定通過まとめ / S武装神姫PF / KPE / 2S1739
   - https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%812023%E5%B9%B48%E6%9C%88%E3%81%BE%E3%81%A8%E3%82%81%EF%BC%888%E6%9C%887/
   - reliability: INDUSTRY / PUBLIC_INSPECTION_REPORT
5. 遊技通信 / P-WORLD — 型式S武装神姫PF / KPE / AT純増・基本構造
   - https://news.p-world.co.jp/articles/25502/yugitsushin
   - reliability: INDUSTRY
6. なな徹 — CZ/AT確率 / 機械割 / 34.47G/50枚
   - https://nana-press.com/kaiseki/machine/647/18820/
   - reliability: ANALYSIS_HIGH
7. なな徹 — 設定変更/据え置き / 有利区間・CZスルー天井・内部状態
   - https://nana-press.com/kaiseki/machine/647/18824/
   - reliability: ANALYSIS_HIGH
8. 一撃 — AT確率 / 機械割 / 34.47G/50枚 / 純増 / CZ天井 / ヒキツギAT
   - https://1geki.jp/slot/s_busou_shinki/
   - reliability: ANALYSIS_HIGH
9. ぽこすろっと — 設定変更/電源OFF→ON / CZスルー・武装高確・逆押し高確・有利区間 / 天井短縮なし
   - https://www.nankaikoya.jp/busoushinki-kitaichi/
   - reliability: ANALYSIS_SINGLE
10. すろぱちくえすと — 朝一設定変更/電断 / 周期途中の据え置き推測 / 数値競合確認
   - https://www.slopachi-quest.com/article/busoushinki-tenjou/
   - https://www.slopachi-quest.com/article/busoushinki-settei/
   - reliability: ANALYSIS_SINGLE
11. HAZUSE — 型式 / 検定番号 / 基本スペック
   - https://hazuse.com/machine/pachislot/2S1739/
   - reliability: ANALYSIS_HIGH
12. グリーンべると / P-WORLD — 2024-01-09新台スケジュール
   - https://news.p-world.co.jp/articles/26523/greenbelt
   - reliability: INDUSTRY

## missingFields
- 本機固有のリールガックン条件/発生率
- 純電源OFF→ON後の開始ステージの確定契約
- 設定変更専用の朝一当選率/モード振り分け（公開固定値なし）
