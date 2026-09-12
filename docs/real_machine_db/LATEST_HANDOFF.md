更新日: 2026-09-12

## 現在地点
- recordCount: **1489**
- latestRecordAdded: **SLOTえとたま — No.1489**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-04-04_slot-etotama.md`
- chronologicalFrontier: **2022-04-04**
- frontierLatestMachine: **SLOTえとたま — No.1489**
- schema: **resetBehavior v0.7**
- status: **2022-04-04_GROUP_OPEN_3_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1488 `パチスロひぐらしのなく頃に祭2 カケラ遊び編` を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の2022-04-04群3機目 `SLOTえとたま` をNo.1489として登録。
- P-WORLD業界記事、1geki、イチカツ、スロパチクエスト、期待値見える化、スロット解析.com、パチビー、ちょんぼりすた、検定通過一覧を横断して性能コアとresetBehaviorを照合。
- 正式型式 `S/えとたま/EM`、2022-02-14検定通過、2022-04-04導入、6.2号機A+ATを確認。1Sxxxx形式の検定番号は十分再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 機械割97.6/98.8/100.4/104.1/106.2/108.2%、ボーナス合算1/178.1〜1/157.5、AT初当り1/464.1〜1/314.0、約37G/50枚、AT純増約2.0枚/G。
- 基本獲得はえとたまぼ〜にゃす平均約150枚、みにぼ〜にゃす/べーすぼ〜にゃす平均約40枚、AT初期50G+α。
- 天井は有利区間移行後ボーナス&AT間800GでAT当選。
- resetBehaviorは設定変更で天井・内部状態・有利区間RESET、据え置き/純電源OFF→ONはCARRY_OVER。
- 通常時は有利区間ランプ消灯タイプでランプ変更判別不可。機種別解析ではガックン判別も効かない/困難とされる。
- 固定短縮天井、設定変更専用モード振り分け、専用早当たり/CZ/AT優遇数値は検索語・資料系統を変えて再探索しても確認できず。実戦値ベース資料では明確なリセット恩恵なしと評価されるため、推測値は入れていない。
- 遡及QAは本線No.1489を優先し、カーソルを据え置いた。

## No.1489 — SLOTえとたま
- path: `docs/real_machine_db/machines/2022-04-04_slot-etotama.md`
- manufacturer: **メーシー（ユニバーサル系）**
- formalModel: **S/えとたま/EM**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2022-04-04**
- generation/system: **6.2号機 / A+AT（リアルボーナス+ゲーム数上乗せAT）**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.8 / 100.4 / 104.1 / 106.2 / 108.2%**
- bonusCombined: **1/178.1 / 1/175.2 / 1/172.5 / 1/165.5 / 1/161.4 / 1/157.5**
- ATinitialHit: **1/464.1 / 1/443.1 / 1/421.7 / 1/368.3 / 1/339.3 / 1/314.0**
- baseGamesPer50: **約37G/50枚**
- netIncrease: **AT約2.0枚/G**
- basicPayout: **えとたまぼ〜にゃす平均約150枚 / みにぼ〜にゃす・べーすぼ〜にゃす平均約40枚 / AT初期50G+α**
- ceiling: **有利区間移行後ボーナス&AT間800GでAT当選**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE**
- confidence: **HIGH**

### resetBehavior v0.7 — No.1489
- **設定変更**: 天井・内部状態・有利区間RESET。
- **据え置き**: 天井進行・内部状態・有利区間CARRY_OVER。
- **純電源OFF→ON**: 天井・内部状態・有利区間CARRY_OVER。
- **ゲーム数/天井**: 通常800G天井。設定変更で新規進行、電断/据え置きは引継ぎ。固定短縮天井なし。
- **モード/状態**: 設定変更でRESET。設定変更専用振り分け数値は未確認。
- **有利区間**: 設定変更でRESET。通常時は有利区間ランプ消灯タイプなので朝一ランプ判別不可。
- **朝一恩恵/不利**: 明確な専用恩恵/不利数値は未確認。実戦値解析では特段のリセット恩恵なし。
- **変更判別**: ランプ不可。機種別解析ではガックン判別も効かない/困難。
- **公開朝一数値**: 設定変更専用のモード振り分け・早当たり率・短縮天井等は確認できず。
- **UNVERIFIED_AFTER_RESEARCH**: 検定番号、設定変更専用開始ステージ、専用モード/状態振り分け、専用早当たり/CZ/AT優遇数値。

## 2022-04-04群
既知候補:
1. `ぱちスロ ウルトラマンタロウ 暴君SPEC` — **No.1487 処理済み**
2. `パチスロひぐらしのなく頃に祭2 カケラ遊び編` — **No.1488 処理済み**
3. `SLOTえとたま` — **No.1489 処理済み**
4. `パチスロ この素晴らしい世界に祝福を！` — **No.1490候補 / 未処理**

- status: **OPEN_3_OF_4_KNOWN_PROCESSED**。
- 群CLOSED判定はNo.1490処理後、PB・別型式・25/30φ差・地域先行・延期/段階導入まで再監査して行う。

## 次回本線の再開地点
- **No.1490候補 `パチスロ この素晴らしい世界に祝福を！` から継続。**
- 処理後、2022-04-04群を横断再監査してCLOSED可否を判定する。
- 性能コアとresetBehavior v0.7を同時収集し、公開値欠損は表記揺れ・型式・メーカー・シリーズ名と各リセット検索語を変え、十分再探索後のみUNVERIFIEDとする。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線No.1489を優先し、遡及QAは未実施。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md`（仮面ライダーDX〜走れ！スーパーバイク編）**を維持。

## GitHub保存
- No.1489追加 commit: `d55ad59c07283b461e0ac13d44399fb98eeeda03`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1489 SLOTえとたま
- https://news.p-world.co.jp/articles/20087/nippon
- https://1geki.jp/slot/s_etotama/
- https://ichikatsu.com/etotama/
- https://www.slopachi-quest.com/article/etotama-tenjou/
- https://slotjin.com/tenjoukitaichi/etotama/
- https://slotkaiseki.com/etotama_tuujoumap/
- https://www.pachibee.jp/machines/index/222030002
- https://chonborista.com/slot/universal-slot/163305/
- https://q-and-a.hatenablog.com/entry/%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%BC%E3%81%AE%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E
