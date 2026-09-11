# ハイハイシオサイ

recordNo: 1296
machineName: ハイハイシオサイ
manufacturer: パイオニア
formalModel: SハイハイシオサイHY
certificationNumber: 9S0041
releaseDate: 2019-08-05
generation: 6号機
systemType: ノーマル / Aタイプ / 25φ完全告知

## payoutRateBySetting

| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 98% |
| 2 | 100% |
| 3 | 103% |
| 5 | 106% |
| 6 | 108% |

HAZUSE、パチ＆スロ必勝本、複数当時解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/195 | 1/204 | 1/99 |
| 2 | 1/190 | 1/197 | 1/97 |
| 3 | 1/182 | 1/187 | 1/92 |
| 5 | 1/235 | 1/117 | 1/78 |
| 6 | 1/169 | 1/172 | 1/85 |

HAZUSE、パチ＆スロ必勝本、ちょんぼりすた、K-Navi等で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約32.5〜34.0G/50枚（設定差あり）。
- 当時解析の代表値は約32.5G/50枚。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- NOT_APPLICABLE（AT/ART/RT非搭載のノーマルタイプ）。

## basicPayout

- BIG CHANCE: 技術介入成功時 最大194枚。
- REG CHANCE: 技術介入成功時 最大102枚。
- HAZUSE上の終了条件はBIG 209枚超払い出し、REG 104枚超払い出し。

## modeSpecificMinimumData

- ハイビスカス点灯でボーナス確定となるノーマルタイプ。
- 天井: 非搭載。
- ゾーン: なし。
- ボーナス成立ゲームで告知。通常時の小役取りこぼしは基本的にない設計。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_NONAPPLICABLE_FIELDS
resetQaLastUpdated: 2026-09-11

- settingChangeBehavior: 本機は天井・通常時モード・AT/ART状態を持たないノーマルタイプで、設定変更専用の当選優遇・短縮天井・専用高確は確認されない。設定変更時のリール初期化細目や内部成立ボーナスの扱いを本機固有資料で直接固定できる公開資料は確認できず、推測補完しない。
- carryOverBehavior: 天井G数・モード・有利区間といった引継ぎ対象はNOT_APPLICABLE。据え置き時の本機固有リール初期位置・内部成立ボーナス状態を直接規定する公開資料は確認できず `PUBLIC_DETAIL_NOT_FOUND_AFTER_RESEARCH`。
- powerCycleBehavior: 電源OFF→ONのみでのリール初期位置・成立ボーナス状態を直接規定する本機固有公開資料は確認できず `PUBLIC_DETAIL_NOT_FOUND_AFTER_RESEARCH`。天井・モード・有利区間についてはNOT_APPLICABLE。
- gameCounterReset: NOT_APPLICABLE（ゲーム数天井非搭載）。
- ceilingAfterReset: NOT_APPLICABLE（天井非搭載）。
- modeAfterReset: NOT_APPLICABLE（通常時モード管理を性能コアとして持たないノーマルタイプ）。
- stateAfterReset: AT/ART/CZ等の持越し状態はNOT_APPLICABLE。成立ボーナス等の細部は実機完全再現領域かつ本機固有公開契約を固定できないため収集対象外寄りとして推測しない。
- advantageousSectionReset: NOT_APPLICABLE（本機の通常ボーナス遊技に有利区間管理を用いるAT/ART機ではない）。
- resetBenefits: 複数攻略資料で **リセット恩恵なし / 朝一恩恵特になし** と一致。
- resetPenalties: 設定変更専用の主要な不利要素は確認されず `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 液晶なしノーマルのため主要攻略資料では基本的にリセット判別不可。パイオニア筐体のリールガックンが「わずかに有効な可能性」とする当時記事はあるが、本機固有の発生条件・発生率・確定性は固定できないため `ANALYSIS_SINGLE_CLUE_NOT_CONFIRMED`。
- publicMorningNumbers: 設定変更専用の朝一当選率・恩恵発生率・短縮天井・モード振り分けは存在確認できず、公開数値なし。

### resetBehavior 再探索メモ

「ハイハイシオサイ / SハイハイシオサイHY / パイオニア / シオサイ」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井短縮 / モード / ガックン / リールガックン / 有利区間 / リセット恩恵」を組み合わせて再探索。ちょんぼりすた、モゲスロ、スロリスクタイム、HAZUSE、当時解析を横断。天井・ゾーン・リセット恩恵なしは複数系統で一致。変更判別は「基本不可」、ガックンは可能性示唆止まりで、本機固有発生率は固定できない。設定変更・据え置き・純電断それぞれのリール初期位置等について直接表を持つ資料は確認できなかったため、一般的なパイオニア機の挙動を転記していない。

## qualityNotes / conflicts

- 型式 `SハイハイシオサイHY` / 検定番号 `9S0041` はHAZUSEで確認。
- パイオニア公式製品一覧は2019年8月発売、HAZUSE・必勝本・K-Navi等は2019-08-05導入で一致。
- ベースはHAZUSEが設定1〜6で約32.5〜34.0G/50枚、複数解析が代表値約32.5G/50枚。定義差を保持し、単一固定値へ平均化しない。
- 一部二次ページに設定2合算 `1/79` の誤記があるが、BIG 1/190・REG 1/197からも整合せず、複数資料一致の `1/97` をcanonicalとする。
- メーカー名をHAZUSE表示が「バイオニア」とする箇所があるが、公式社名・製品一覧から `パイオニア` をcanonicalとする。

## sources

取得日: 2026-09-11

1. パイオニア公式 — 2019年製品一覧
   - https://www.slot-pioneer.co.jp/products/2019.html
   - 2019年8月発売を確認。
   - reliability: OFFICIAL
2. HAZUSE — ハイハイシオサイ
   - https://hazuse.com/machine/pachislot/9S0041/
   - 型式、検定番号、導入日、設定別BIG/REG/合算/機械割、50枚ベース32.5〜34.0G、ボーナス終了条件。
   - reliability: ANALYSIS_HIGH / DATABASE
3. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/3378/1/74146
   - 2019-08-05導入、設定別BIG/REG/合算/機械割、BIG最大194枚・REG最大102枚。
   - reliability: ANALYSIS_HIGH
4. ちょんぼりすた — ハイハイシオサイ
   - https://chonborista.com/slot/pionia-slot/87059/
   - 約32.5G/50枚、天井非搭載、朝一リセット恩恵特になし。
   - reliability: ANALYSIS_HIGH
5. モゲスロ — ハイハイシオサイ
   - https://moge-site.com/archives/23006
   - 天井なし・ゾーンなし・リセット恩恵なし、リセット判別基本不可、ガックン可能性の記述。
   - reliability: ANALYSIS_SINGLE
6. 日刊スポーツ / 娯楽産業 — パイオニア新機種発表
   - https://www.nikkansports.com/amusement/pachislot/news/201906060000423.html
   - 6号機Aタイプ、ボーナス合算1/99〜1/78、BIG最大194枚・REG最大102枚。
   - reliability: INDUSTRY
7. スロリスクタイム — 6号機リセット恩恵一覧
   - https://pachisuro100.com/reset/
   - ハイハイシオサイはリセット恩恵特になしと整理。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定変更 / 据え置き / 純電源OFF→ONそれぞれの本機固有リール初期位置・成立ボーナス状態の直接公開契約
- 本機固有ガックン発生条件・発生率・確定率

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_NONAPPLICABLE_FIELDS

## conflicts

- ベース: 約32.5G代表値 vs 設定差込み約32.5〜34.0G。定義差として併記し平均しない。
- 一部二次資料の設定2合算1/79は、複数資料および構成確率と不整合のため誤記扱い。canonical 1/97。
