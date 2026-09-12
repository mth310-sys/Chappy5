更新日: 2026-09-13

## 現在地点
- recordCount: **1535**
- latestRecordAdded: **パチスロ 革命機ヴァルヴレイヴ — No.1535**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-11-21_pachislot-kakumeiki-valvrave.md`
- chronologicalFrontier: **2022-11-21**
- frontierLatestMachine: **パチスロ 革命機ヴァルヴレイヴ — No.1535**
- schema: **resetBehavior v0.7**
- status: **2022-11-21_GROUP_OPEN_2_OF_3_CANONICAL_ACTUAL_LAUNCH / NEXT_RINO_HEAVEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1534 `Lバキ 強くなりたくば喰らえ!!!` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり最新handoffとmain実レコードを進捗正本として扱った。
- 前handoff指定の次候補 `パチスロ 革命機ヴァルヴレイヴ` をNo.1535として性能コア + resetBehavior v0.7で追加。
- 型式 `L革命機ヴァルヴレイヴD`、検定番号 `2S0869`、SANKYO、2022-11-21実導入をメーカー公式・業界記事・HAZUSE・DMM等で照合。
- 設定1〜6の機械割97.3/98.3/100.8/103.2/107.9/114.9%、CZ 1/277→1/258、公開スペック上の初当たり1/519→1/490、約31.3G/50枚、純増約7.2枚/G。
- 革命ボーナスは50G+α、平均約470枚、AT期待度約55%。決戦ボーナスは平均約110枚、AT期待度約35%。
- 天井はCZ間モード別1000/700/500/300G+α（液晶G数）、ボーナス&AT間1500G+α（実G数）、CZ最大7スルー、決戦ボーナス4連続の複数系統。
- 設定変更は有利区間・天井・モード・内部状態RESET。設定変更時はモードBへ移行しやすいが、専用A/B/C/D振り分けの公開数値は確認できず推測していない。
- 据え置き/純電断は有利区間・天井・モード・内部状態CARRY_OVER。長時間電断後は液晶表示G数だけリセットされるため、朝一0G表示だけでは変更判別不可。
- 設定変更直後1G目は非有利区間から有利区間へ移行するゲームで、レア役成立時にAT直撃抽選。共闘レア役ならAT直撃濃厚級の解析あり。
- 本機固有ガックン条件/発生率は表記揺れ・型式名・メーカー名と朝一/設定変更/据え置き/ガックン等を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 2022-10-13の遊技日本には11/20導入予定表記がある一方、実導入資料は11/21で一致。予定値と実導入値を平均せずcanonical 11/21、alternate 11/20予定としてCONFLICT保持。
- 初当たり1/519→1/490は資料により「ボーナス」「AT初当たり」とラベル差があるため、数値を保持しつつレコードでは中立的に「公開スペック上の初当たり」とした。

## No.1535 — パチスロ 革命機ヴァルヴレイヴ
- manufacturer: **SANKYO**
- formalModel: **L革命機ヴァルヴレイヴD**
- inspectionCode: **2S0869**
- releaseDate: **2022-11-21**
- generation/system: **6.5号機 / スマートパチスロ初期 / AT / 上位AT搭載**
- payoutRate: **97.3 / 98.3 / 100.8 / 103.2 / 107.9 / 114.9%**（設定1〜6）
- CZ「共闘Vチャレンジ」: **1/277 → 1/258**
- 公開スペック上の初当たり: **1/519 → 1/490**
- baseGamesPer50: **約31.3G/50枚**
- netIncrease: **約7.2枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_UNVERIFIED_GACKUN_AND_NO_PUBLISHED_RESET_MODE_PERCENTAGE**

### resetBehavior v0.7 — No.1535
- **設定変更**: 有利区間・天井・モード・内部状態RESET。咲森学園ステージ開始。モードBへ移行しやすい。
- **据え置き**: 有利区間・天井・モード・内部状態CARRY_OVER。
- **純電源OFF→ON**: 内部はCARRY_OVER。長時間OFFでは液晶表示G数がリセットされるが内部G数は引き継ぐ。
- **ゲーム数・天井**: CZ間A 1000 / B 700 / C 500 / D 300G+α。ボーナス&AT間1500G+α。CZ最大7スルー、決戦BONUS4連続の回数天井もあり。
- **モード**: 設定変更時に再抽選、モードBへ移行しやすい。専用振り分け数値はUNVERIFIED_AFTER_RESEARCH。
- **有利区間**: 設定変更でRESET、据え置き/純電断でCARRY_OVER。
- **朝一恩恵**: モードB優遇 + 有利区間移行1G目レア役でAT直撃抽選。
- **朝一不利**: 前日の各天井進行、モード、内部状態、スルー進行を失う。
- **変更判別**: 朝一液晶0Gだけでは不可。据え置き時の内部G数を前日G数と合算しCZ当選位置から推測可能。ガックンUNVERIFIED。
- **公開朝一数値**: モードB天井700G+α、C 500G+α、D 300G+α。設定変更専用モード比率は未公開確認。

## 2022-11-21群 — OPEN 2/3 canonical actual launch
1. **Lバキ 強くなりたくば喰らえ!!!（オリンピア）** — No.1534 済
2. **パチスロ 革命機ヴァルヴレイヴ（SANKYO）** — No.1535 済
3. **スマスロリノヘブン / LアナザーリノヘブンCC（山佐）** ← No.1536候補 / 次回最優先

### 境界監査メモ
- 2022-09-01の日工組・日電協発表ではスマスロ販売予定4型式として `LバキL3 / L革命機ヴァルヴレイヴD / L HEY！エリートサラリーマン鏡PA4 / LアナザーリノヘブンCC` が挙げられていた。
- `HEY！エリートサラリーマン鏡` の実導入は複数業界資料で **2022-12-05**。11/21 actual launch群には含めず12/5群で処理する。
- 11/21 actual launch本線は現時点でバキ / ヴァルヴレイヴ / リノヘブンの3機。リノヘブン処理後に同日メダル機/PB/別型式/地域先行・延期を再監査してCLOSED可否を判定する。

## 今回の主要資料
### パチスロ 革命機ヴァルヴレイヴ
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/936/
- 遊技日本: https://news.p-world.co.jp/articles/21909/nippon
- グリーンべると11/21実導入: https://news.p-world.co.jp/articles/22261/greenbelt
- HAZUSE基本/型式/検定番号: https://hazuse.com/machine/pachislot/2S0869/
- HAZUSE天井/設定変更: https://hazuse.com/machine/pachislot/2S0869/genre/207/
- 一撃 天井/朝一: https://1geki.jp/slot/s_valvrave/3/
- パチマガスロマガ 朝イチ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/57/kr01.php
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/174976/
- なな徹 モード: https://nana-press.com/kaiseki/machine/463/25462/
- DMMぱちタウン: https://p-town.dmm.com/machines/4244/shops
- P-WORLD: https://www.p-world.co.jp/machine/database/9725

## 保存コミット
- No.1534追加: `8041b38a34eeda326183009e4dffaae195771206`
- No.1535追加: `01b8e09e160beb02f17d1aeb959160f90814d59e`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1536候補 `スマスロリノヘブン / LアナザーリノヘブンCC`（2022-11-21）から性能コア + resetBehavior v0.7を収集する。処理後、11/21同日群をメダル機/PB/別型式/地域先行・延期まで再監査しCLOSED可否を判定する。**
