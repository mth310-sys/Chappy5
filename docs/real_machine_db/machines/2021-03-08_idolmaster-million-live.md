# パチスロ アイドルマスター ミリオンライブ！

No: 1398
machineName: パチスロ アイドルマスター ミリオンライブ！
machineNameVariants: パチスロ アイドルマスター ミリオンライブ！ / Sアイドルマスター / SアイドルマスターG
manufacturer: ビスティ
releaseDate: 2021-03-08
formalModelName: SアイドルマスターG
certificationNumber: UNVERIFIED_AFTER_RESEARCH

generation: 6.1号機
systemType: AT / CZ / 擬似ボーナス / 純増可変型AT

## identity / release
- SANKYO公式オンライン博物館で販売名、型式 `SアイドルマスターG`、ブランド ビスティ、導入年月2021年3月を確認。
- 当時攻略資料・P-WORLDで全国導入開始日2021-03-08を照合。
- 検定番号は再探索したが信頼できる公開値を固定できずUNVERIFIED。
- reliability: OFFICIAL_IDENTITY / ANALYSIS_HIGH_DATE

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.5% |
| 2 | 96.0% |
| 3 | 99.7% |
| 4 | 102.7% |
| 5 | 105.5% |
| 6 | 108.4% |
- 設定2は初当たりが軽い一方で出玉率が設定1を下回る特殊設計のため、並びを補正しない。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/310.0 |
| 2 | 1/211.6 |
| 3 | 1/281.2 |
| 4 | 1/244.3 |
| 5 | 1/221.1 |
| 6 | 1/196.6 |
- 公式・複数攻略DBで照合。
- reliability: OFFICIAL / ANALYSIS_HIGH

## baseGamesPer50
- 約38.8G/50枚。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- AT「シアターフェスティバル」: 約0.3枚/G。
- 上位状態「シアターフェスティバルBOOST」: 約4.3枚/G。
- reliability: OFFICIAL / ANALYSIS_HIGH

## basicPayout
- 擬似ボーナス「ミリオンチャンス」: 前半13G + アンコールモード20G、平均獲得約56枚の資料あり。
- AT「シアターフェスティバル」: 初期50G+α。
- AT中MB「アピールタイム」: ベルナビ3/5/7回+α、約20〜50枚。
- BB「ライブボーナス」: ベルナビ10/20回+α、約80〜150枚。
- 固定一律獲得枚数型ではないため、比較用は純増0.3/4.3枚/G + 初期50G+αを主軸に保持。

## modeSpecificMinimumData
- 通常時は毎ゲームファン数を獲得し、規定ファン数でCZ抽選。
- ファン数9999人到達で確定CZ。
- CZスルー天井は資料表現に差があり、「CZ8連続スルー」と「4〜9回のシナリオ最終CZ」の表現を確認。単一固定回数へ平均化しない。
- 別系統資料では通常時900Gのゲーム数天井（擬似ボーナス当選）も報告されるが、主要当時解析では当初未公表/存在示唆に留まるため `ANALYSIS_SINGLE_LATE_DISCLOSURE` として補助保持。
- ファン数は有利区間ごとにリセットされる。
- 有利区間移行時のモード振り分け公開値（パチマガスロマガとなな徹を照合）:
  - 設定1: A 47.1% / B 26.8% / ブースト25.7% / チャンス0.4%
  - 設定2: A 23.0% / B 46.4% / ブースト30.2% / チャンス0.4%（表のrowspan省略を別資料で照合）
  - 設定3: A 39.7% / B 32.9% / ブースト27.1% / チャンス0.4%（丸め差あり）
  - 設定4: A 33.0% / B 38.3% / ブースト28.3% / チャンス0.4%
  - 設定5: A 27.9% / B 42.4% / ブースト29.3% / チャンス0.4%
  - 設定6: A 22.1% / B 47.1% / ブースト30.4% / チャンス0.4%
- なな徹HTMLでは列見出し/rowspanの抽出が崩れる箇所があるため、パチマガスロマガの同一表で列順と設定4=28.3%を再確認してcanonical化。
- 上記は「有利区間移行時」であり、設定変更専用テーブルとは断定しない。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_MODE_TABLE_AND_CEILING_SCOPE_NOTES
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は **ログインステージ準備中（非有利区間）から開始**。
- 担当アイドルは誕生日該当アイドルがいる場合はそのアイドル、いない場合はランダム。
- 非有利区間から有利区間へ移行するため、前有利区間のファン数・CZ進行は継続扱いにしない。
- 有利区間移行時はモードA/B/ブースト/チャンスの抽選が行われ、設定別公開表あり。

### carryOverBehavior
- 据え置きで有利区間中のままなら、公開朝一資料の電源ON/OFF契約に基づき **全ての状態を引き継ぐ**。
- 閉店後に設定変更等を行ったケースは別。

### powerCycleBehavior
- 設定変更なしの電源OFF→ONで、有利区間中（有利区間ランプ点灯時）は **全ての状態を引き継ぐ**。
- 非有利区間中に電源OFF→ONした場合は、設定変更時と同様の挙動。
- reliability: ANALYSIS_HIGH_MACHINE_SPECIFIC

### gameCounterReset
- 主要進行値は単純G数だけでなく、ファン数/CZシナリオ/有利区間内状態を含む。
- 設定変更: 非有利区間開始のため前有利区間の進行をRESET側として扱う。
- 据え置き・純電断: 有利区間中ならCARRY_OVER。
- 通常時900G天井は後発単一系統情報のため、設定変更時の個別カウンタ契約を独立確定値として追加しない。

### ceilingAfterReset
- 設定変更専用の短縮天井は確認できず `NO_PUBLIC_RESET_SPECIFIC_SHORTENING_FOUND`。
- 通常仕様の主要天井はファン9999人、およびCZスルー系。
- 900Gゲーム数天井は後発単一系統情報として補助保持し、リセット専用数値とはしない。

### modeAfterReset
- 有利区間移行時のモードA/B/ブースト/チャンス設定別振り分けを公開資料で確認。
- 設定変更時だけの表ではなく有利区間移行時共通表として保存。
- 有利区間1G目のキャラ/バナー、3G目のアイキャッチでモード・次回CZ優遇度の示唆あり。

### stateAfterReset
- 設定変更時: ログインステージ準備中（非有利区間）。
- 純電断: 有利区間中なら状態引継ぎ、非有利区間中なら設定変更時同様。

### advantageousSectionReset
- 設定変更: RESET → 非有利区間開始。
- 据え置き/純電断: 有利区間中ならCARRY_OVER。
- 通常遊技中に有利区間が切れる契機もあるため、朝一ランプは閉店時状態・店側処理を考慮する。

### resetBenefits
- 攻略資料では「リセット後の恩恵: なし」「リセット狙い: なし」と整理される。
- 一方、有利区間再移行時にモード抽選を受け、開始直後の示唆を確認できる実戦上の情報価値はある。
- 固定短縮天井・朝一AT保証・朝一特定G以内当選率などの専用恩恵は確認できない。

### resetPenalties
- 設定変更専用の定量的不利要素は確認できず `NONE_CONFIRMED`。

### resetDetection
- 当時攻略資料では、有利区間ランプ **点灯=据え置き濃厚 / 消灯=リセット濃厚** とされる。
- ただし閉店時すでに非有利区間だった場合や店側対策を含め、ランプ単独で100%確定とはしない。
- 本機固有ガックン条件・発生率は再探索後も固定資料を確認できず `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers
- 設定変更専用の短縮天井G数: NONE_CONFIRMED。
- 設定変更専用のAT当選率: NONE_CONFIRMED。
- 有利区間移行時モード振り分け: 設定1〜6のA/B/ブースト/チャンス表あり（上記modeSpecificMinimumData参照）。
- 通常仕様ベース: 約38.8G/50枚（朝一専用値ではない）。

## conflicts / safeguards
- 2025年「スマスロ アイドルマスター ミリオンライブ！ ネクストプロローグ」のリセット天井500G、チャンス75.8%/天国24.2%は **別機種**。2021年本機へ混入させない。
- CZスルー天井は資料に「CZ8連続スルー」と「4〜9回シナリオ最終CZ」の表現差があるため `CONFLICT_OR_DEFINITION_DIFFERENCE_CZ_SKIP_CEILING` とし、単一数値へ丸めない。
- 900Gゲーム数天井は後発単一資料で明示される一方、主要当時資料は当初「ゲーム数天井存在模様」まで。`ANALYSIS_SINGLE_LATE_DISCLOSURE` として扱う。
- なな徹HTML抽出ではモード表の列名・設定4数値に崩れが見えたため、パチマガスロマガ同一表を優先して補正。これはソース抽出QAであり、推測補完ではない。

## sources
取得日: 2026-09-12

1. SANKYOオンライン博物館「パチスロ アイドルマスター ミリオンライブ！」
   - https://www.sankyo-fever.jp/collection/916/
   - 販売名、型式SアイドルマスターG、ビスティ、導入年月、ATゲーム性、設定別初当たり。
   - reliability: OFFICIAL
2. パチ＆スロ必勝本系「パチスロ アイドルマスター ミリオンライブ！」
   - https://hisshobon.news/uncategorized/413/
   - 導入日、AT純増0.3/4.3枚/G、設定別初当たり・機械割。
   - reliability: ANALYSIS_HIGH_PERIOD
3. なな徹「小役確率」
   - https://nana-press.com/kaiseki/machine/114/3089/
   - 約38.8G/50枚。
   - reliability: ANALYSIS_HIGH
4. なな徹「朝イチ/設定変更時」
   - https://nana-press.com/kaiseki/machine/114/3220/
   - 設定変更時の非有利区間開始、担当アイドル決定、電源ON/OFF時の有利区間中全状態引継ぎ、非有利区間なら設定変更時同様。
   - reliability: ANALYSIS_HIGH_MACHINE_SPECIFIC
5. なな徹「規定ファン数テーブル」
   - https://nana-press.com/kaiseki/machine/114/3221/
   - 9999人確定CZ、有利区間移行時の設定別モード表。HTML抽出崩れのため列順は6と照合。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ「ファン数テーブル」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/39/tj07.php
   - A/B/ブースト/チャンスの列順、設定4ブースト28.3%を照合。
   - reliability: ANALYSIS_HIGH_PERIOD
7. すろぱちくえすと「天井解析・朝一設定変更」
   - https://www.slopachi-quest.com/article/mirimasu-tenjou/
   - ファン9999人/CZスルー天井、38.8G/50枚、リセット恩恵なし、ランプ判別。
   - reliability: ANALYSIS_PERIOD
8. P-WORLD「パチスロ アイドルマスター ミリオンライブ！」
   - https://www.p-world.co.jp/machine/database/9325
   - メーカー、6号機AT、CZ/天井/擬似ボーナス、純増0.3/4.3枚/G、基本AT構造。
   - reliability: INDUSTRY_DATABASE_HIGH
9. ちょんぼりすた「Sアイドルマスター」
   - https://chonborista.com/slot/sankyo-slot/129748/
   - 導入日、AT純増、38.8G/50枚、設定別初当たり・出玉率、ファン9999人天井。
   - reliability: ANALYSIS_HIGH
10. 朧「天井期待値と狙い目」
   - https://note.com/oboro_slot/n/n61c915f20bbe
   - ファン9999人、CZスルーシナリオ、通常時900G天井の後発補助情報。
   - reliability: ANALYSIS_SINGLE

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 通常900G天井の複数高信頼系統照合: PARTIAL

## finalStatus
coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_MODE_TABLE_AND_CEILING_SCOPE_NOTES
