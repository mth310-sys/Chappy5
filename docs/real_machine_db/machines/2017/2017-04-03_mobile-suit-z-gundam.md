machineName: パチスロ 機動戦士Zガンダム
manufacturer: Bisty（ビスティ）
releaseDate: 2017-04-03
recordNumber: 1064
generation: 5号機
systemType: A+ART / ボーナス経由ART
formalModelName: パチスロ機動戦士ZガンダムS
certificationNumber: 6S1412
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで導入開始日2017-04-03、メーカーBisty、型式名 `パチスロ機動戦士ZガンダムS`、検定番号 `6S1412` を直接確認。
- SANKYOオンライン博物館でビスティブランド、2017.04導入を公式確認。
reliability: OFFICIAL/INDUSTRY_HIGH

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 99.8% |
| 3 | 102.2% |
| 4 | 105.7% |
| 5 | 108.4% |
| 6 | 111.0% |
- パチ＆スロ必勝本、ちょんぼりすた、pachislo-dataで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BB | CB | ボーナス合算 | ART初当たり |
|---:|---:|---:|---:|---:|
| 1 | 1/595.8 | 1/182.6 | 1/139.7 | 1/429.7 |
| 2 | 1/595.8 | 1/181.0 | 1/138.8 | 1/418.2 |
| 3 | 1/595.8 | 1/176.6 | 1/136.2 | 1/387.6 |
| 4 | 1/595.8 | 1/170.7 | 1/132.7 | 1/349.6 |
| 5 | 1/595.8 | 1/168.5 | 1/131.3 | 1/318.9 |
| 6 | 1/595.8 | 1/165.9 | 1/129.8 | 1/297.9 |
- BBは全設定共通1/595.8。主要系列はパチ＆スロ必勝本、ちょんぼりすた、pachislo-dataで一致（設定6 ARTのみ1/297.9と1/298.0の丸め差）。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約33G/50枚。
- pachislo-data、ちょんぼりすたで一致。
- 別解析では設定別33.3 / 33.4 / 33.6 / 33.9 / 34.2 / 34.6Gの掲載を確認しているため、物差し上は概算約33Gと設定差のあるコイン持ちを区別する。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART単体: 約1.3枚/G。
- ボーナス込み実効掲載値: 約1.7枚/G。
- SANKYO公式はART「RUSH OF ZETA」を1Gあたり純増約1.7枚と紹介しているが、解析資料では単体約1.3枚/G・ボーナス込み約1.7枚/Gと定義を分離している。本DBでは解析上の定義を明示して併記し、数値競合として平均しない。
reliability: OFFICIAL_PLUS_ANALYSIS_HIGH_DEFINITION_NOTE

## basicPayout
- BB/CB: 約56枚。
- ART「RUSH OF ZETA」: 初期40G以上。
- ARTはストーリー→バトル→報酬のセット継続型。完全再現用の敵別抽選・上乗せ振り分けはSCOPE_EXCLUDED。
reliability: OFFICIAL/ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時777G消化以降に成立したボーナスでART当選濃厚。
- ART非当選ボーナスのスルー回数天井あり。内部カウント上、CBは1スルー、BBは2スルーとして扱われ、最大側では10回目相当のボーナスでART濃厚。
- 設定変更時/ART終了時にスルー回数天井が再選択される公開振り分けがあるため、朝一客行動に関係する範囲のみresetBehaviorへ収録。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_APPLICABLE_FIELDS_WITH_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- ゲーム数天井: RESET。
- スルー回数天井: 設定変更時に再選択。公開設定別振り分けあり。
- 内部状態: RESELECT / 再抽選。pachislo-dataおよび期待値見える化で一致。
- 液晶開始ステージ: フォン・ブラウン（資料に `フォンブラウン` / `ファンブラウン` 表記揺れあり）。
- 一撃の2017-04-01時点ページではモード・状態・液晶ステージが「現在調査中」だったが、後発当時解析で内部状態再抽選・開始ステージが補完されたため、時点差として後発情報を採用する。

### carryOverBehavior
- 据え置きは設定変更を伴わないため、前日からのゲーム数天井・スルー進捗・内部状態を維持する運用として扱う。
- 純電源OFF→ONの直接比較資料で天井・内部状態CARRYOVERを確認。
reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみ: 天井ゲーム数CARRYOVER。
- 内部状態: CARRYOVER。
- 液晶開始ステージ: フォン・ブラウン。
- 設定変更と純電断は同一視しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset
- settingChange: RESET。
- carryOver/powerCycle: CARRYOVER。
- 通常時777G天井の進捗が対象。

### ceilingAfterReset
- 固定のゲーム数短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常の777G条件自体は設定変更後も同じ。
- ただしスルー回数天井は設定変更時に再選択され、早い回数が選ばれる可能性があるため、ゲーム数天井短縮とは別のリセット時数値恩恵として扱う。

### modeAfterReset
- ゲーム数モードのリセット専用振り分け: `NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH`。
- スルー回数天井テーブルは設定変更時に再選択されるが、通常時の長期ゲーム数モードとは別項目としてnumericResetDataへ保存。

### stateAfterReset
- settingChange: RESELECT / 再抽選。
- powerCycle: CARRYOVER。
- 通常時内部状態は低確・高確・超高確の3段階。
- 設定変更時の低確/高確/超高確の具体的振り分け率は、検索語・資料系統を変えた今回の再探索でも直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- スルー回数天井を設定変更時に再選択するため、早い内部スルー天井が選択される可能性がある。
- 設定変更後のスルー天井振り分けは高設定ほど早い回数側が強く、設定6のみ内部5スルー相当に2.0%の振り分けが確認される。
- 固定の777G短縮は確認されない。

### resetPenalties
- 設定変更固有の公開された明確な不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 据え置きで育った777G天井進捗やスルー進捗は設定変更で消えるため、前日ハマリ/スルー狙いの客にとっては期待値消失要因となるが、これはリセット契約そのものとして記録し、独立したペナルティ抽選とは扱わない。

### resetDetection
- 期待値見える化は朝一のガックン判別を「不可」と明記。
- 本機固有のガックンによる確定変更判別は採用しない。
- 設定変更・電源OFF→ONとも液晶開始ステージがフォン・ブラウンとされるため、開始ステージ単独では変更判別不可。
- 前日777G天井進捗やスルー履歴を把握できる場合、その挙動差は変更推測材料になり得るが、単独確定判別とはしない。
reliability: ANALYSIS_HIGH

### numericResetData
- resetShortenedGameCeiling: NONE_CONFIRMED_AFTER_RESEARCH
- resetInternalStateDistribution: UNVERIFIED_AFTER_RESEARCH
- resetStage: フォン・ブラウン
- resetSpecificEarlyHitRate: NOT_DIRECTLY_PUBLISHED
- resetPassCeilingDistribution: 設定変更時/ART終了時の内部スルー回数天井選択率（%）

| 内部スルー回数 | 設定1 | 設定2 | 設定3 | 設定4 | 設定5 | 設定6 |
|---:|---:|---:|---:|---:|---:|---:|
| 0 | 12.6 | 13.0 | 13.8 | 13.4 | 15.0 | 15.4 |
| 1 | 1.2 | 1.6 | 2.0 | 2.8 | 3.5 | 4.3 |
| 2 | 1.2 | 1.6 | 2.0 | 2.8 | 3.5 | 4.3 |
| 3 | 2.4 | 2.8 | 3.2 | 4.7 | 5.9 | 7.1 |
| 4 | 3.9 | 4.7 | 5.9 | 7.1 | 8.3 | 9.5 |
| 5 | 0 | 0 | 0 | 0 | 0 | 2.0 |
| 6 | 12.6 | 13.0 | 13.8 | 14.2 | 14.6 | 15.4 |
| 7 | 21.3 | 22.1 | 23.2 | 26.8 | 31.1 | 33.9 |
| 8 | 3.2 | 3.2 | 3.2 | 3.2 | 3.2 | 3.2 |
| 9 | 41.7 | 38.2 | 33.1 | 25.2 | 15.0 | 5.1 |
- pachislo-dataの0〜9表記をcanonicalとして保存。一撃は同じ分布を1〜10回表記で掲載しており、数値内容は一致するためCONFLICTではなくINDEXING_DEFINITION_DIFFERENCE。
- この表は天井書き換え抽選を除く純粋なスルー回数天井振り分け。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## dataQualityNotes
- 一撃の初期公開時点では設定変更時の状態等が調査中だったが、後発当時解析2系統で `設定変更=状態再抽選 / 電源OFF→ON=状態引継ぎ / ステージ=フォン・ブラウン` が一致したため補完。
- スルー天井表は資料により0〜9表記と1〜10表記がある。数値系列は同一で、単なるカウント表示定義差として扱う。
- ART純増は公式紹介約1.7枚/Gと解析上の単体約1.3枚/G・ボーナス込み約1.7枚/Gで定義差があるため、平均せず定義を分離。

## conflicts
- NONE_MATERIAL_CONFIRMED。
- `DEFINITION_NOTE_ART_NET_INCREASE`: 公式約1.7枚/G vs 解析ART単体約1.3枚/G・ボーナス込み約1.7枚/G。定義差として保持。
- `INDEXING_DEFINITION_DIFFERENCE_PASS_CEILING`: 0〜9 vs 1〜10表記。数値系列一致のためCONFLICT扱いしない。

## missingFields
- 設定変更時の低確/高確/超高確具体的振り分け率: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の直接的な朝一特定G以内ART当選率: NOT_DIRECTLY_PUBLISHED
- 実機完全再現用詳細抽選: SCOPE_EXCLUDED

## sources
retrievedDate: 2026-09-09
- OFFICIAL / SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/886/
- INDUSTRY_DB / HAZUSE: https://hazuse.com/machine/pachislot/6S1412/
- ANALYSIS / 一撃 天井・設定変更: https://1geki.jp/slot/s_zgundam/3/
- ANALYSIS / 一撃 スルー回数別ART期待度・天井選択率: https://1geki.jp/slot/s_zgundam/64/
- ANALYSIS / pachislo-data: https://pachislo-data.com/bisty/34910
- ANALYSIS / 期待値見える化: https://slotjin.com/zone/zgundam/
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/bisty-slot/32863/
- ANALYSIS / パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/2920/1/61966
