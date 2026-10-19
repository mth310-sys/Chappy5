# パチスロ鉄拳4アルティメットデビルVer.

recordNo: 1532
machineName: パチスロ鉄拳4アルティメットデビルVer.
manufacturer: 山佐製造 / 山佐ネクスト販売
formalModel: Sパチスロ鉄拳4デビルバージョンTCD
inspectionCode: 2S0327
releaseDate: 2022-11-07
generation: 6.5号機
systemType: AT / 高純増AT / CZ経由型

## payoutRateBySetting
- 設定L: 公開実用値なし（特殊設定）
- 設定1: 97.8%
- 設定2: 99.0%
- 設定4: 103.0%
- 設定5: 107.0%
- 設定6: 113.0%

信頼度: INDUSTRY / ANALYSIS_HIGH

## initialHitBySetting
### CZ「ジャッジメントバトル」
- 設定1: 1/372.4
- 設定2: 1/368.0
- 設定4: 1/340.9
- 設定5: 1/317.7
- 設定6: 1/284.5

### AT「デビルラッシュ」
- 設定1: 1/636.4
- 設定2: 1/604.6
- 設定4: 1/504.9
- 設定5: 1/433.1
- 設定6: 1/362.3

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 設定1: 約31.0G/50枚。

信頼度: INDUSTRY / ANALYSIS_HIGH

## netIncrease
- AT「デビルラッシュ」: 約7.0枚/G。

信頼度: OFFICIAL/INDUSTRY_HIGH

## basicPayout
- CZ「ジャッジメントバトル」突破期待度: 50%以上。
- ジャッジメントバトル経由ATの初期特化「デビルインパクト」: 8G+α、AT期待獲得枚数 約712枚（設定1）。
- デビルゾーン経由「鉄拳アタック」: AT期待獲得枚数 約894枚（設定1）。
- アルティメットデビルゾーンのフリーズ期待度: 約50%。
- アルティメットフリーズ発生時はプレミアム鉄拳アタックを経由する強力契機。業界記事では期待値約2670枚とされる。

信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は規定ゲーム数等からCZ「ジャッジメントバトル」を目指し、突破でAT「デビルラッシュ」へ移行する。
- ATは全て上乗せ特化ゾーンから開始する。
- 通常のゲーム数天井は500G+αでCZ当選。
- 設定変更後およびAT終了後はCZ天井が最大300G+αへ短縮される。
- 6.5号機として有利区間は最大4000G世代。本DBでは朝一・設定変更との関係に必要な範囲だけ保持する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_UNVERIFIED_POWER_CYCLE_LOW_LEVEL
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間をRESET。
- 天井ゲーム数をRESETし、朝一は最大300G+αの短縮天井が適用される。
- 内部状態はRESETとする解析が複数一致。
- 設定変更後専用の全モード振り分け・全内部状態振り分けは、資料系統を変えて再探索したが比較可能な完全公開値を固定できず `PUBLIC_FULL_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時は有利区間をCARRY_OVER。
- 据え置き時は天井進行をCARRY_OVER。
- 据え置き時は内部状態をCARRY_OVERとする複数解析が一致。
- 据え置きでは設定変更時専用の300G+α短縮天井は発生しない。

### powerCycleBehavior
- 純電源OFF→ONだけの場合の本機固有「有利区間 / 天井G数 / 内部状態」の直接契約を明示した十分強い機種別資料は、`パチスロ鉄拳4アルティメットデビルVer. / Sパチスロ鉄拳4デビルバージョンTCD / 山佐 / 山佐ネクスト / 電源ON OFF / 電断 / 据え置き / 朝一 / 天井引継ぎ` を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 2021年の旧「パチスロ鉄拳4デビルVer.」には電断引継ぎ資料が存在するが、別型式・別世代のため本機へ自動転用しない。

### gameCounterReset
- 設定変更: ゲーム数天井RESET。朝一のCZ天井は最大300G+αとして再スタート。
- 据え置き: 天井進行CARRY_OVER。
- 純電断: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常時CZ天井: 最大500G+α。
- 設定変更後CZ天井: 最大300G+α。
- AT終了後も最大300G+α。
- 天井到達恩恵はCZ「ジャッジメントバトル」当選であり、AT直撃ではない。

### modeAfterReset
- 設定変更時の有利区間RESETに伴い朝一用の進行へ再セットされる。
- 本機の公開朝一でホール経営/客AIに最も重要な固定値は300G+α短縮天井。
- 設定変更専用の完全なモード振り分け表は `PUBLIC_FULL_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き: 内部状態CARRY_OVER。
- 純電断: `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更時: 有利区間RESET。
- AT終了時も有利区間RESETする場合があるが、AT終了後に引き継ぐ可能性もある。
- CZ「ジャッジメントバトル」敗北後は有利区間を引き継ぐ解析が確認される。
- 朝一の見た目のみで有利区間RESET/引継ぎを確定判別できないとする本機解析が一致。

### resetBenefits
- 最大の朝一恩恵はCZ天井が500G+αから300G+αへ短縮されること。
- これにより通常状態より早いCZ到達が保証される。
- 旧2021年「鉄拳4デビルVer.」の設定変更時DZ当選率や規定G数振り分けは別機種情報のため本機の朝一数値に転用しない。

### resetPenalties
- 設定変更により前日の天井進行・有利区間・内部状態は失われるため、前日が天井間近だった場合の据え置き価値は消失する。
- それ以外の設定変更専用の明確な不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間のRESET/引継ぎは見た目で判別できないとする本機解析が複数一致。
- 本機固有のリールガックン条件・発生率は、正式型式・メーカー・朝一/設定変更/ガックン等で再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一300G+αでCZ到達した場合はリセット挙動と整合するが、単独で設定変更確定とまでは扱わない。

### numericResetData
- 通常CZ天井: 500G+α。
- 設定変更後CZ天井: 300G+α。
- AT終了後CZ天井: 300G+α。
- 設定変更専用の全モード振り分け: `PUBLIC_FULL_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更専用のガックン発生率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### publicMorningNumbers
- 最大300G+αでCZ「ジャッジメントバトル」当選。
- 通常最大500G+αに対し200G以上浅い公開朝一基準値として、朝一客AI向けに保持する。
- 旧機種「鉄拳4デビルVer.」の7.5～9.4% DZ抽選や300/500/700G台振り分け等は本機固有値ではないため採用しない。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `パチスロ鉄拳4アルティメットデビルVer. / 鉄拳4アルティメットデビル / Sパチスロ鉄拳4デビルバージョンTCD / 2S0327 / 山佐 / 山佐ネクスト` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 300G / 500G / モード / 状態 / ガックン / 有利区間 / 判別` を組み替えて再探索。
- 遊技通信、遊技日本、グリーンべると、一撃、なな徹、パチマガスロマガ、K-Navi、ちょんぼりすた等を横断。
- 同シリーズの2021年「パチスロ鉄拳4デビルVer.」と本機を混同しないよう、旧型式のリセット数値は本機へ移植しない。

## releaseDateAudit
- 当初handoffでは同じ2022-11-07群に `パチスロ幼女戦記` が置かれていたが、後続資料で同機は2022-11-07予定から延期され、実導入日は2022-12-05で複数ソース一致。
- よって本DBでは `パチスロ幼女戦記` を2022-11-07へ誤登録せず、2022-12-05群へ繰り越す。
- 本機 `パチスロ鉄拳4アルティメットデビルVer.` は2022-11-07導入で、業界記事・攻略DB・当時導入動画が一致。

## sources
取得日: 2026-09-13

1. P-WORLD / 遊技通信 — 押し順のみで純増約7枚の高純増ATを搭載
   - https://news.p-world.co.jp/articles/21729/yugitsushin
   - 型式 `Sパチスロ鉄拳4デビルバージョンTCD`、山佐製、6.5号機、純増約7枚/G、AT期待獲得枚数等。
   - reliability: INDUSTRY_HIGH
2. P-WORLD / 遊技通信 — 東京都公安委員会検定通過状況（2022-07-25）
   - https://news.p-world.co.jp/articles/21279/yugitsushin
   - 検定番号 `2S0327`、型式、山佐製造を確認。
   - reliability: PUBLIC_INDUSTRY_HIGH
3. P-WORLD / 遊技日本 — ホール導入記念記事
   - https://news.p-world.co.jp/articles/22118/nippon
   - 2022-11-07ホール導入開始を確認。
   - reliability: INDUSTRY_HIGH
4. グリーンべると — 期待値2670枚のフリーズ搭載
   - https://web-greenbelt.jp/post-62419/
   - 純増7枚、JB突破率50%以上、設定1 AT期待獲得枚数約712枚、11月上旬納品。
   - reliability: INDUSTRY_HIGH
5. なな徹 — パチスロ鉄拳4アルティメットデビルVer. 機種概要
   - https://nana-press.com/kaiseki/machine/439/
   - 設定別CZ/AT確率、機械割、31G/50枚、純増7.0枚/G、2022-11-07導入。
   - reliability: ANALYSIS_HIGH
6. なな徹 — 朝一・設定変更時の挙動 / 有利区間
   - https://nana-press.com/kaiseki/machine/439/12562/
   - 設定変更=有利区間/天井/状態RESET、据え置き=CARRY_OVER、設定変更時300G+α短縮。
   - reliability: ANALYSIS_HIGH
7. なな徹 — 天井条件・恩恵
   - https://nana-press.com/kaiseki/machine/439/12561/
   - 通常500G+α、設定変更/AT後300G+α、恩恵CZ。
   - reliability: ANALYSIS_HIGH
8. 一撃 — 天井/設定変更詳細
   - https://1geki.jp/slot/s_tekken4_ultimate/3/
   - 設定変更/AT後300G+α、設定変更で有利区間RESET、JB敗北時引継ぎ等。
   - reliability: ANALYSIS_HIGH
9. パチマガスロマガ — ボーナス確率・機械割
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/247/kh02.php
   - 設定別JB/AT/機械割。
   - reliability: ANALYSIS_HIGH
10. パチマガスロマガ — 天井ハイエナ期待値
    - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/247/kr08.php
    - 通常500G+α、設定変更/AT後300G+α。
    - reliability: ANALYSIS_HIGH
11. K-Navi — パチスロ鉄拳4アルティメットデビルVer.
    - https://p-kn.com/slot/3843/
    - 2022-11-07導入、ゲーム性。
    - reliability: ANALYSIS_HIGH
12. ちょんぼりすた — 鉄拳4アルティメットデビルVer.
    - https://chonborista.com/slot/yamasa-slot/172589/
    - 6.5号機、設定別CZ/AT/機械割、31G/50枚、天井500G+α・設定変更/AT後300G。
    - reliability: ANALYSIS_HIGH
13. やんちゃプレス — パチスロ幼女戦記
    - https://www.yancha-press.com/26879/
    - `2022-11-07 → 2022-12-05に延期` を明記。11/7群キュー修正根拠。
    - reliability: ANALYSIS_ARCHIVE
14. K-Navi — パチスロ幼女戦記
    - https://p-kn.com/slot/3861/
    - ホール導入開始2022-12-05。延期後実導入日の照合。
    - reliability: ANALYSIS_HIGH

## missingFields
- 本機固有の純電源OFF→ON時の有利区間/天井/内部状態の直接契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有のリールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の全モード/全内部状態振り分け: PUBLIC_FULL_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 性能コアの主要数値は実用上の競合なし。
- `パチスロ幼女戦記` の導入日について、初期発表/旧予定では2022-11-07、延期後実導入は2022-12-05。実導入日をcanonicalとし、11/7群から除外して12/5群へ繰り越す。
- 2021年「パチスロ鉄拳4デビルVer.」のリセット解析が検索に多数混在するため、別型式・別世代として本機へ転用しない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_UNVERIFIED_POWER_CYCLE_LOW_LEVEL
confidence: HIGH