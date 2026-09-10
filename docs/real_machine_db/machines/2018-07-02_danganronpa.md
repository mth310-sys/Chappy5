# No.1208 パチスロ ダンガンロンパ～希望の学園と絶望の高校生～

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ ダンガンロンパ～希望の学園と絶望の高校生～
- manufacturer: ニューギン
- releaseDateCanonical: 2018-07-02
- generation: 5.9号機 / 5号機
- systemType: A+ART / リアルボーナス4種 + 自力継続型ART
- formalModelName: `ダンガンロンパ～希望の学園と絶望の高校生～NW`
- certificationNumber: `7S1654`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- ちょんぼりすた、K-Navi、すろぱちくえすと、Pachislo-dataでホール導入日2018-07-02が一致。
- PiDEA Xの2018-05-22内覧会記事は「7月上旬予定」。
- 一部後年解析ページ見出しに2018-07-09表記がある一方、同ページ本文のホール導入日は2018-07-02としているため、canonicalは複数一致の2018-07-02。
- 型式は検定通過一覧/中古実機資料で`ダンガンロンパ～希望の学園と絶望の高校生～NW`、検定番号は検定DBで`第7S165400号`を確認し、本DB表記を`7S1654`とする。
- confidence: `ANALYSIS_HIGH / INDUSTRY_CROSSCHECKED`。

## performanceCore

### payoutRateBySetting
- setting1: 97.7%
- setting2: 98.9%
- setting3: 100.9%
- setting4: 103.6%
- setting5: 105.8%
- setting6: 106.3%

### initialHitBySetting
PVボーナス1（赤7）:
- all settings: 1/897.8

PVボーナス2（青7）:
- setting1: 1/464.8
- setting2: 1/422.8
- setting3: 1/394.8
- setting4: 1/339.6
- setting5: 1/303.4
- setting6: 1/293.9

チャレンジボーナス（赤7・赤7・BAR）:
- all settings: 1/528.5

モノクマチャレンジ（青7・青7・BAR）:
- all settings: 1/897.8

ボーナス合算:
- setting1: 1/159.5
- setting2: 1/154.2
- setting3: 1/150.3
- setting4: 1/141.6
- setting5: 1/134.9
- setting6: 1/132.9

ART初当たり:
- setting1: 1/443.8
- setting2-6: 今回確認した主要表では独立値が掲載されず、ボーナス+ART合算のみ公開。推測補完しない。

ボーナス+ART合算:
- setting1: 1/117.3
- setting2: 1/114.4
- setting3: 1/112.3
- setting4: 1/107.3
- setting5: 1/103.5
- setting6: 1/102.3

### baseGamesPer50
- 約32～32.2G/50枚。

### netIncrease
- ART「学級裁判」: 約1.0枚/G。

### basicPayout
- PVボーナス1: 最大209枚。
- PVボーナス2: 最大159枚。
- チャレンジボーナス: 24枚。
- モノクマチャレンジ: 30枚。
- ART「学級裁判」: 前半エピソード15Gまたは20G + 後半議論パート平均24G。
- ART継続率: 約50% / 約70% / 約90%の3段階。比較用最低限として保持。

### ceiling
- 通常ゲーム数天井: `NOT_APPLICABLE / 天井非搭載`。

## modeSpecificMinimumData
- 4種類のリアルボーナスからART当選を目指す5.9号機A+ART。
- ART「学級裁判」は約1.0枚/G、自力継続+セットストック型。
- 有利区間完走確定状態「ダンガンロンパタイム」の存在は解析資料で確認。ただし通常時の全モード移行・ART内部抽選は物差し用途外のため収集しない。

## resetBehavior

### settingChangeBehavior
- 当時解析の朝一比較表では、設定変更時の`有利区間 / 状態 / ステージ`はいずれも「調査中」。
- 機種名表記揺れ、正式型式`～NW`、ニューギン、設定変更/リセット/朝一/据え置き/電源OFF→ON/有利区間/ガックンを組み替えて再探索したが、本機固有の確定契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きを独立条件として、有利区間・内部状態・ART/ボーナス状態・ステージを直接明記する本機固有資料を固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 当時解析の比較表では純電源OFF→ON時の`有利区間 / 状態 / ステージ`も「調査中」。
- 据え置き一般論から自動補完せず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### gameCounterReset
- 通常ゲーム数天井は非搭載のため、天井ゲーム数カウンタは `NOT_APPLICABLE_NO_NORMAL_CEILING`。
- ART中等の残G処理はホール経営物差しに必要な範囲で機種固有契約を確認できず `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_CEILING`。

### modeAfterReset
- 設定変更専用モード、朝一専用モード振り分け、リセット専用高確移行率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時には内部状態が複数あること自体は確認できるが、通常時全モードテーブルは収集対象外。

### stateAfterReset
- settingChange: `UNVERIFIED_AFTER_RESEARCH`
- carryOver: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`
- powerOFFToON: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`

### advantageousSectionReset
- 本機は5.9号機A+ARTで、有利区間を利用するゲーム性および有利区間完走確定状態の存在を確認。
- ただし設定変更/純電断別の有利区間処理は当時資料でも「調査中」であり、5.9号機一般論から確定契約へ昇格させず `UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits
- 設定変更専用の天井短縮、ART直行、朝一専用高確、初当たり優遇数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の公開された不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン、初期出目、液晶ステージ、有利区間ランプ等による設定変更/据え置き判別の確定条件・公開発生率は `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_CEILING`
- resetSpecificModeDistribution: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- resetSpecificHitBoost: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- resetSpecificARTBoost: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- gakkunChangeDetectionRate: `PUBLIC_RATE_NOT_FOUND_AFTER_RESEARCH`
- morningSpecificPublicHitRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更専用の朝一当選率、モード振り分け、短縮天井、ガックン率等は再探索後も固定できず。

## conflicts
- 導入日について、一部解析ページの見出しに`2018-07-09導入開始`表記があるが、同ページ本文のホール導入日は`2018-07-02`。さらにK-Navi、ちょんぼりすた、すろぱちくえすと等も7/2で一致するため `CONFLICT_RELEASE_DATE_HEADER_2018_07_09_VS_BODY_AND_MULTI_SOURCE_2018_07_02`として保持し、canonicalは7/2。
- ちょんぼりすた本文のPVボーナス2説明に`1/464.8～1/239.3`というレンジ表記がある一方、同ページの設定別表および複数資料はsetting6 `1/293.9`で一致。`CONFLICT_INLINE_RANGE_TRANSCRIPTION_239_3_VS_TABLE_293_9`として保持し、設定別表の1/293.9をcanonicalとする。

## missingFields
- ART初当たり設定2～6の独立公開値。
- 設定変更/据え置き/純電源OFF→ON別の有利区間・内部状態・ステージ契約。
- 本機固有の変更判別契約と公開朝一数値。

## sources
取得日: 2026-09-10

1. PiDEA X — ボーナスとARTがダンガンループ！「ダンガンロンパ」／ニューギン
   - https://www.pidea.jp/articles/%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E3%81%A8ART%E3%81%8C%E3%83%80%E3%83%B3%E3%82%AC%E3%83%B3%E3%83%AB%E3%83%BC%E3%83%97%EF%BC%81%E3%80%8C%E3%83%80%E3%83%B3%E3%82%AC%E3%83%B3%E3%83%AD%E3%83%B3%E3%83%91%E3%80%8D%EF%BC%8F%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%AE%E3%83%B3
   - 2018-05-16内覧会、7月上旬予定、A+ART、4ボーナス獲得枚数、ART純増約1.0枚/G、ART構成。
   - confidence: `INDUSTRY`
2. ちょんぼりすた — ダンガンロンパ スロット新台
   - https://chonborista.com/slot/newgin-slot/60259/
   - 導入2018-07-02、5.9号機A+ART、約32G/50枚、設定別ボーナス確率・合算・機械割、ART純増、天井非搭載、朝一設定変更/電源OFF→ON比較表が調査中。
   - confidence: `ANALYSIS_HIGH`
3. K-Navi — パチスロ ダンガンロンパ～希望の学園と絶望の高校生～
   - https://p-kn.com/slot/3016/
   - ホール導入開始2018-07-02、ボーナス+ART、各ボーナス獲得枚数、ART純増/継続率。
   - confidence: `ANALYSIS_HIGH`
4. P-WORLD — パチスロ ダンガンロンパ
   - https://www.p-world.co.jp/machine/database/8663
   - ニューギン、各ボーナス獲得枚数、ART約1.0枚/G、ART構成。
   - confidence: `INDUSTRY_DB`
5. すろぱちくえすと — ダンガンロンパ スロット新台解析
   - https://www.slopachi-quest.com/article/danganronpa/
   - 導入2018-07-02、5.9号機A+ART、ダンガンロンパタイム=有利区間完走確定。
   - confidence: `ANALYSIS_HIGH`
6. すろ・ぱち(解) — ダンガンロンパ希望の学園と絶望の高校生 解析情報
   - https://kaiseki.sulopachinews.com/archives/531
   - 本文ホール導入日2018-07-02、約32.2G/50枚、設定別ボーナス確率・機械割。ページ見出しの7/9表記との競合根拠。
   - confidence: `ANALYSIS_SINGLE`
7. ゼンリンネット — 検定切れ一覧
   - https://zenrin-net.com/kenteis/listsend?machinesort_id=2&order_date=2021
   - 型式`ダンガンロンパ〜希望の学園と絶望の高校生〜NW`、検定番号`第7S165400号`。
   - confidence: `INDUSTRY_DB`
8. 中一商事 — ニューギン パチスロ ダンガンロンパ中古実機
   - https://www.nakaiti.com/html/sNyugin023.html
   - 型式名、5号機、ボーナス獲得枚数、ART構成の補助照合。
   - confidence: `SECONDARY`
