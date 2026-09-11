# DIAMOND

recordNo: 1335
machineName: DIAMOND
machineNameVariants: Diamond / ダイヤモンド / Sオリスロ3AA
manufacturer: JPS（ジェイピーエス）
formalModel: Sオリスロ3AA
certificationNumber: 9S1375
releaseDate: 2020-02-24
generation: 6号機
systemType: ノーマル / 完全告知 / 技術介入型 / 2段階設定

## payoutRateBySetting
| 設定 | チェリー狙い | 完全攻略 |
|---|---:|---:|
| 5 | 101% | 104% |
| 6 | 101% | 104% |

- 完全攻略はベル・チェリー全取得＋ボーナス即揃え条件。
- 業界発表の「出玉率104%」は完全攻略条件の値として扱う。

## initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 5 | 1/172 | 1/437 | 1/124 |
| 6 | 1/218 | 1/218 | 1/109 |

## baseGamesPer50
| 設定 | チェリー狙い時 | 完全攻略時 |
|---|---:|---:|
| 5 | 36.8G/50枚 | 39.8G/50枚 |
| 6 | 37.6G/50枚 | 40.8G/50枚 |

- 技術介入条件でベースが変化するため、単一値へ平均化しない。

## netIncrease
- NOT_APPLICABLE（ボーナスのみで出玉を増やすノーマルタイプ）。

## basicPayout
- BIG: 210枚を超える払い出しで終了 / 実獲得約195枚。
- REG: 105枚を超える払い出しで終了 / 実獲得約104枚。
- 払い出し終了条件と実獲得枚数は定義を分離して保持する。

## modeSpecificMinimumData
- 天井機能: 非搭載。
- 通常時モード/状態による初当たり管理: 公開ゲームフロー上なし。
- 完全告知機。リール左下「GET BONUS」ランプ点灯でボーナス濃厚。
- 告知タイミングは先告知:後告知=1:3とする解析あり。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_NOT_APPLICABLE_CORE_WITH_UNVERIFIED_MACHINE_SPECIFIC_DETECTION
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 本機は天井・通常時モード・内部状態で初当たりを管理するタイプではないため、AT/ART機のようなリセット恩恵は **NOT_APPLICABLE**。
- 設定変更により選択設定（5/6）が切り替わり、対応するボーナス確率・小役確率へ変化する。
- 設定変更時のボーナス成立状態、リール初期挙動など機種固有の電源/設定変更内部契約は、表記揺れ・型式名・PB同型式を含めて再探索したが公開確定資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior
- 据え置き時に引き継ぐゲーム数天井・モード・有利区間進行は存在しないため、これらは **NOT_APPLICABLE**。
- 据え置き固有の朝一表示/リール挙動は公開確定資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior
- 電源OFF→ONのみで引き継ぐ天井G数・通常モード・状態・有利区間進行はゲームフロー上 **NOT_APPLICABLE**。
- 純電断時のボーナス成立状態や告知ランプ等の機種固有契約は十分な再探索後も公開確定値を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- 通常ゲーム数による天井非搭載のため **NOT_APPLICABLE**。

### ceilingAfterReset
- 天井機能非搭載のため **NOT_APPLICABLE**。
- 設定変更専用の短縮天井も存在しない。

### modeAfterReset
- 通常時モード管理を確認できず **NOT_APPLICABLE_TO_MAIN_GAME_FLOW**。
- 朝一専用モード/リセット専用モードの公開値なし。

### stateAfterReset
- 低確/高確等の内部状態で初当たりを管理する公開ゲームフローではないため **NOT_APPLICABLE_TO_MAIN_GAME_FLOW**。

### advantageousSectionReset
- 本機はボーナス主体ノーマルタイプで、朝一客行動に関係する有利区間管理を公開ゲームフロー上確認できず **NOT_APPLICABLE_TO_MAIN_GAME_FLOW**。
- 一般的な6号機仕様から有利区間挙動を推測補完しない。

### resetBenefits
- 天井短縮、朝一専用モード、CZ/AT優遇などのリセット恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 前日天井G数・モード等を消去する不利要素は対象機能自体がないため **NOT_APPLICABLE**。
- 設定変更固有の追加的不利抽選は公開確認できず。

### resetDetection
- `DIAMOND / Diamond / ダイヤモンド / Sオリスロ3AA / JPS` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール / 判別` を組み替え、同型式PB（HYPER UPYELL / パチスロ123 / スロまる）も含めて再探索。
- 本機固有のガックン発生条件/率、朝一出目・ランプ等による確定変更判別は公開確定資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ボーナス確率と小役確率には設定5/6差があるため長期試行では設定推測材料になるが、朝一の変更判別とは分離する。

### numericResetData / publicMorningNumbers
- ゲーム数天井: 非搭載。
- 短縮天井: 非搭載。
- 設定変更専用モード振り分け: NOT_APPLICABLE / PUBLIC_VALUE_NOT_FOUND。
- 朝一専用当選率・恩恵発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## resetBehavior 再探索メモ
2026-09-11に `DIAMOND / Diamond / ダイヤモンド / Sオリスロ3AA / 9S1375 / JPS / ジェイピーエス` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / 有利区間 / ランプ / ガックン / リール` を組み替え、業界一次記事、HAZUSE、P-WORLD、パチ7、同型式PB機資料、回顧資料を横断。性能コアと天井非搭載は複数系統で固定できたが、機種固有の設定変更/純電断時リール挙動やボーナス成立状態、ガックン条件は公開確定資料を固定できなかったため推測補完しない。

## releaseDate / PB展開
- K-Navi全国新台カレンダー: 2020-02-24。
- HAZUSE: 2020-02-25。
- パチ7: 2020-03-02。
- 日刊スポーツ/娯楽産業の発表会記事: 一般販売版DIAMONDは「2月末から導入予定」。
- 定義/掲載日差を平均化せず `CONFLICT_RELEASE_DATE_2020_02_24_VS_2020_02_25_VS_2020_03_02` として保持。本DBの時系列キューは全国一斉導入日を明示するK-Navi 2020-02-24をcanonicalとする。
- 同型式 `Sオリスロ3AA` はDIAMONDのほか、HYPER UPYELL、パチスロ123、スロまるとして展開。パネル/告知ランプ/サウンド等が異なるPB版で、基本スペックは同一と業界一次資料が説明。

## sources
取得日: 2026-09-11

1. Amusement Japan — ホール3社がPB機 / Sオリスロ3AA
   - https://amusement-japan.co.jp/article/detail/10001537/
   - 2段階設定、完全攻略104%、BB/RB/合算、実獲得約195/104枚、同一スペックPB展開を確認。
   - reliability: INDUSTRY
2. 日刊スポーツ（娯楽産業） — JPS「Sオリスロ3AA」合同プレス説明会
   - https://www.nikkansports.com/amusement/pachislot/news/202001170000194.html
   - 型式名、DIAMOND一般販売、各PB名、210/105枚超払い出し終了、一般版2月末導入予定を確認。
   - reliability: INDUSTRY
3. グリーンべると — JPSが4社共同開発PB機第3弾を発表
   - https://web-greenbelt.jp/post-35245/
   - JPSと3ホール法人による共同開発、Sオリスロ3AA、各PB名、ノーマルタイプを照合。
   - reliability: INDUSTRY
4. HAZUSE — DIAMOND
   - https://hazuse.com/machine/pachislot/SX0032/
   - 型式 `Sオリスロ3AA`、検定番号9S1375、設定別BIG/REG/合算、チェリー狙い/完全攻略機械割、ベース、天井非搭載、2020-02-25表記を確認。
   - reliability: ANALYSIS_HIGH
5. パチ7 — ダイヤモンド
   - https://pachiseven.jp/machines_v2/5979
   - 設定別BIG/REG/合算、技術介入別機械割・ベース、天井なし、2020-03-02表記を照合。
   - reliability: ANALYSIS_HIGH_SUPPORT
6. P-WORLD — DIAMOND
   - https://www.p-world.co.jp/machine/database/9131
   - BIG実獲得195枚、REG実獲得104枚、基本ゲームフローを照合。
   - reliability: INDUSTRY_DATABASE
7. K-Navi — 2020年2月新台導入カレンダー
   - https://p-kn.com/calendar/202002/
   - 全国一斉導入開始日として2020-02-24にDIAMOND / スロまる / PSO2を掲載。
   - reliability: INDUSTRY_DATABASE

## missingFields
- settingChangeBehaviorのうち機種固有のリール初期挙動/ボーナス成立状態: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehaviorのうち機種固有のボーナス成立状態/告知状態: UNVERIFIED_AFTER_RESEARCH
- resetDetectionのガックン/朝一確定判別: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用公開朝一数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- CONFLICT_RELEASE_DATE_2020_02_24_VS_2020_02_25_VS_2020_03_02
- メーカー表記はHAZUSEに「ジェイビーエス」とあるが、業界一次資料・権利表記に基づきcanonicalは **JPS（ジェイピーエス）**。

status: COMPLETE_CORE_RESET_V07_WITH_UNVERIFIED_MACHINE_SPECIFIC_DETECTION
