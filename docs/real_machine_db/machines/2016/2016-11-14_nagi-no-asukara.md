machineName: パチスロ 凪のあすから
manufacturer: NET / ネット
releaseDate: 2016-11-14
recordNumber: 1023
generation: 5号機 / 5.5号機期
systemType: A+RT / ボーナス主体 / 技術介入
formalModelName: 凪のあすから/NC
certificationNumber: 6S0815
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- NETの2016-09-16プレスリリースで「パチスロ 凪のあすから」を2016年11月中旬より全国導入予定と確認。
- 一撃、K-Navi、HAZUSE、ちょんぼりすたはホール導入開始日を2016-11-14として一致。
- p-mediaの検定通過記事は型式名 `凪のあすから/NC`、メーカーNETを明記。
- HAZUSE DATAのmachine_codeは `6S0815`。同DBの機種識別体系を検定番号として採用し、正式型式と合わせて保持する。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 通常掲載機械割 | 完全攻略時 |
|---:|---:|---:|
| 1 | 97.8% | 100.5% |
| 2 | 98.8% | 101.5% |
| 3 | 100.2% | 103.0% |
| 4 | 102.1% | 105.0% |
| 5 | 104.0% | 107.0% |
| 6 | 106.9% | 110.1% |
- 通常掲載値は一撃・ちょんぼりすた等で一致。
- 完全攻略値はちょんぼりすたで公開。PiDEA当時業界記事も「フル攻略では設定1でも機械割100%超」と方向性を裏付ける。
- 通常値と完全攻略値は条件差でありCONFLICTではない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_TECHNICAL_PLAY_DEFINITION

## initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/295 | 1/412 | 1/172 |
| 2 | 1/292 | 1/399 | 1/168 |
| 3 | 1/289 | 1/374 | 1/163 |
| 4 | 1/281 | 1/354 | 1/156 |
| 5 | 1/280 | 1/307 | 1/146 |
| 6 | 1/273 | 1/273 | 1/136 |
- P-WORLD、ちょんぼりすた、一撃で一致する丸め系列をcanonicalとする。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 34.1〜37.0G/50枚（設定1〜6の範囲）。
- ちょんぼりすたの基本情報値。
reliability: ANALYSIS_SINGLE

## netIncrease
- RT「エピソードチャレンジ」: 約+0.2枚/G、最大25G。
- RT「エピソードゲーム」: 約+0.5枚/G、最大25G。
- RT「スペシャルエピソード」: 約+0.5枚/G、最大50G。
- PiDEA/遊技通信系業界記事、P-WORLDで主要値が整合。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG: 技術介入時最大290枚。BIG+RTの「エピソードボーナス」平均純増は約307枚。
- REG: 技術介入時最大111枚。
- BIG終了後は必ずRT「エピソードチャレンジ」へ移行。
- REG終了後1G目はスペシャルリプレイ成立で50G RT「スペシャルエピソード」突入のチャンス。
reliability: OFFICIAL_INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- ボーナス主体A+RT。
- BIG後RTは第1段階エピソードチャレンジ最大25Gから、技術介入成功でエピソードゲーム最大25Gへ移行可能。
- スペシャルエピソードは最大50G。
- 通常時ゲーム数天井は非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_TRANSIENT_RT_STATE_UNVERIFIED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 一撃の当時「天井/設定変更」ページは本機を天井非搭載と明記し、設定変更時の液晶ステージを「現在調査中」としている。
- 天井短縮・朝一専用当選モード・CZ/AT優遇は確認されず、ゲーム数天井に関するリセット価値は `NOT_APPLICABLE`。
- RT中・ボーナス成立状態等の一時的内部状態を設定変更時にどう処理するかは、機種名/型式名/メーカー名と「設定変更・リセット・朝一・据え置き・RT・ガックン」を組み替え、当時解析・古DB・業界資料を再探索したが本機固有の直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 通常時ゲーム数天井が存在しないため天井進捗CARRYOVERは `NOT_APPLICABLE`。
- RT等の一時的内部状態の「設定据え置き」単独契約は、直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 一撃の当時資料は電源OFF/ON時の液晶ステージを「現在調査中」としている。
- 天井非搭載のため天井進捗に関する純電断契約は `NOT_APPLICABLE`。
- RT等の一時的内部状態と液晶状態の純電源OFF→ON契約は、十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更と純電断を同一扱いして推測しない。

### gameCounterReset
- NOT_APPLICABLE_NO_CEILING_GAME_COUNTER。

### ceilingAfterReset
- 通常天井: NONE。
- 設定変更後短縮天井: NONE / NOT_APPLICABLE。

### modeAfterReset
- AT/ART機のような朝一当選モード: NONE_CONFIRMED / STRUCTURALLY_NOT_APPLICABLE_TO_BONUS_MAIN_A_PLUS_RT。
- ナビキャラカスタマイズ等はプレイヤー側演出選択であり、設定変更用内部モードとは区別する。

### stateAfterReset
- 通常時の低確/高確/CZ等: NOT_APPLICABLE_TO_MAIN_HIT_STRUCTURE。
- RT・ボーナス成立状態等の一時的内部状態: UNVERIFIED_AFTER_RESEARCH。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 天井短縮、リセット専用モード、朝一CZ/ART優遇: NONE_CONFIRMED / STRUCTURALLY_NOT_APPLICABLE。

### resetPenalties
- 前日天井進捗消失: NOT_APPLICABLE。
- その他の設定変更固有不利: NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 本機固有のガックン、初期出目、ランプ、液晶ステージ等による設定変更確定/濃厚判別は、表記・検索語・資料系統を変えた再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
- 一撃の設定変更/電源OFF ONページ自体も液晶ステージを調査中としており、一般A+RT論から補完しない。

### numericResetData
- 通常天井: NONE。
- 設定変更後天井: NONE。
- リセット専用モード振り分け: NONE_CONFIRMED / NOT_APPLICABLE。
- 朝一特定G以内当選率: NONE_CONFIRMED。
- リセット恩恵発生率: NONE_CONFIRMED。

## dataQualityNotes
- 導入日・A+RT分類・BIG/REG/合算・通常機械割は複数解析系統で一致。
- BIG/REG獲得性能はNETプレスリリース、当時業界記事、P-WORLD、一撃で整合。
- RT純増は業界記事/P-WORLDで整合。
- 50枚ベースは今回直接数値を取得できたのがちょんぼりすた中心のためANALYSIS_SINGLE。
- 型式 `凪のあすから/NC` は検定通過記事と中古実機流通表記で照合。検定番号 `6S0815` はHAZUSE DATA機種コードを根拠とする。
- resetBehaviorは一撃当時資料が設定変更/電源OFF ONとも液晶ステージ「調査中」。天井非搭載以外の本機固有電断/変更契約を推測で埋めていない。

## conflicts
- NONE_CONFIRMED_AFTER_MULTI_SOURCE_RESEARCH。

## missingFields
- 設定変更/据え置き/純電源OFF→ON時のRT等一時的内部状態: UNVERIFIED_AFTER_RESEARCH
- 本機固有の変更判別契約: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. NETプレスリリース（Dream News転載）— パチスロ 凪のあすから発売決定
   - https://www.dreamnews.jp/press/0000139018/
2. PiDEA X — ネット・Aタイプの真骨頂「凪のあすから」を発表（2016-09-30）
   - https://www.pidea.jp/articles/%E3%83%8D%E3%83%83%E3%83%88%E3%83%BBA%E3%82%BF%E3%82%A4%E3%83%97%E3%81%AE%E7%9C%9F%E9%AA%A8%E9%A0%82%E3%80%8C%E5%87%AA%E3%81%AE%E3%81%82%E3%81%99%E3%81%8B%E3%82%89%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8
3. 長崎県遊技業協同組合 / 遊技通信web転載 — お披露目、BB/REG、RT純増
   - https://nagasaki-yukyo.or.jp/information/%E3%83%8D%E3%83%83%E3%83%88%E3%80%81%E4%BA%BA%E6%B0%97%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E5%87%AA%E3%81%82%E3%81%99%E3%80%8D%E3%83%A2%E3%83%81%E3%83%BC%E3%83%95%E3%81%AE%E3%83%91%E3%83%81%E3%82%B9/
4. 一撃 — パチスロ 凪のあすから（導入日、機械割、A+RT）
   - https://1geki.jp/slot/s_naginoasukara/
5. 一撃 — 天井/設定変更（天井非搭載、設定変更/電源OFF ON液晶ステージ調査中）
   - https://1geki.jp/slot/s_naginoasukara/3/
6. 一撃 — ボーナス概要（BIG最大290枚、REG最大111枚）
   - https://1geki.jp/slot/s_naginoasukara/61/
7. K-Navi — パチスロ 凪のあすから
   - https://p-kn.com/slot/2620/
8. ちょんぼりすた — 凪のあすから スロット（スペック、完全攻略、ベース、天井無し）
   - https://chonborista.com/slot/net-slot/26233/
9. P-WORLD — パチスロ 凪のあすから（性能、RT、ボーナス）
   - https://www.p-world.co.jp/machine/database/8170
10. HAZUSE DATA — パチスロ 凪のあすから（machine_code 6S0815、導入日、A+RT）
   - https://data.hazuse.com/?genre=201&machine_code=6S0815
11. p-media — NET「凪のあすから」検定通過（型式名 凪のあすから/NC）
   - https://p-media.info/%E3%83%8D%E3%83%83%E3%83%88%E3%80%8C%E5%87%AA%E3%81%AE%E3%81%82%E3%81%99%E3%81%8B%E3%82%89%E3%80%8D%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%EF%BC%8F%E6%B5%B7%E6%B5%9C%E3%81%AE%E7%94%BA%E3%81%8C%E8%88%9E/
12. パチスロバンク — 中古実機 凪のあすから/NC（型式照合）
   - https://pachislobank.com/SHOP/s-net0034.html
