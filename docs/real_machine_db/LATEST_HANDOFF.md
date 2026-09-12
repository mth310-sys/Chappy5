更新日: 2026-09-12

## 現在地点
- recordCount: **1451**
- latestRecordAdded: **パチスロ ミクちゃんとイドムンのミラクルチャレンジ — No.1451**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-12-10_mikuchan-idomun-miracle-challenge.md`
- chronologicalFrontier: **2021-12-10**
- frontierLatestMachine: **パチスロ ミクちゃんとイドムンのミラクルチャレンジ — No.1451**
- schema: **resetBehavior v0.7**
- status: **2021-12-10_GROUP_CLOSED_AFTER_1_OF_1_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1449「スターパルサー」を確認。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- LATEST_HANDOFFはNo.1450「泡盛」完了を示していたが、No.1450本体が直前の分岐コミット `1ea814f...` にのみ存在しmainから欠落していることを検出。元blobをそのまま `docs/real_machine_db/machines/2021-12-06_awamori.md` へ復元し、mainの進捗実体とhandoffを再同期した。
- handoff指定の次機No.1451「パチスロ ミクちゃんとイドムンのミラクルチャレンジ」を追加。
- DAXEL、型式 `SミクちゃんとイドムンのミラクルチャレンジDB`、検定番号 `1S0459`、最速導入2021-12-10をHAZUSE・業界記事・1gekiで確認。
- タツミコーポレーションとアサヒディード共同PB「TRY FUTURE PROJECT」第1弾。DAXEL開発、当時業界記事ではNET製筐体。
- 4段階特殊設定は **1 / ミクちゃん / イドムン / 6**。ボーナス合算 **1/113.7 / 1/108.5 / 1/108.5 / 1/96.7**、完全攻略出率 **100.7 / 102.7 / 102.7 / 108.2%** を複数系統で照合。
- BIGは総払出225枚・解析上約210枚獲得、REGは総払出120枚・解析上約105枚獲得。天井非搭載。
- 50枚ベース、設定別BIG総確率/REG確率、一般打ち機械割は、表記・型式・資料系統を変えて再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- resetBehaviorはノーマルAタイプにつき、ゲーム数天井、短縮天井、AT/ARTモード、高確/CZ、有利区間は朝一物差し上NOT_APPLICABLE。設定変更専用の朝一モード/CZ/初当たり優遇も確認されず。
- 設定変更・据え置き・純電源OFF→ON時の成立済みボーナス/告知状態など本機固有内部契約、本機固有ガックン、朝一表示/出目による変更判別は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 1geki 2021年12月カレンダーでは2021-12-10のパチスロは本機1機のみ。業界記事でも最速12/10導入を確認したため **2021-12-10群CLOSED**。

## No.1451 — パチスロ ミクちゃんとイドムンのミラクルチャレンジ
- path: `docs/real_machine_db/machines/2021-12-10_mikuchan-idomun-miracle-challenge.md`
- manufacturer: **DAXEL**
- formalModel: **SミクちゃんとイドムンのミラクルチャレンジDB**
- certificationNumber: **1S0459**
- releaseDate: **2021-12-10**
- generation/system: **6号機 / ノーマルA / 完全告知 / リアルボーナス / 4段階特殊設定**
- settings: **1 / ミクちゃん / イドムン / 6**
- bonusCombined: **1/113.7 / 1/108.5 / 1/108.5 / 1/96.7**
- payoutRateCompleteStrategy: **100.7 / 102.7 / 102.7 / 108.2%**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- basicPayout: **BIG 総払出225枚・約210枚獲得 / REG 総払出120枚・約105枚獲得**
- normalCeiling: **NOT_APPLICABLE**
- coreStatus: **COMPLETE_CORE_WITH_BASE_GAMES_UNVERIFIED**
- resetBehaviorQA: **COMPLETE_APPLICABILITY_WITH_MACHINE_SPECIFIC_RESET_DETAILS_UNVERIFIED**

### resetBehavior v0.7 — No.1451
- **設定変更**: 天井なし。設定変更専用の短縮天井、朝一モード、CZ/AT優遇はNOT_APPLICABLE/確認なし。成立済みボーナス・告知状態等の機種固有契約はUNVERIFIED_AFTER_RESEARCH。
- **据え置き**: 天井・通常モード・高確/CZはNOT_APPLICABLE。成立済みボーナス等の内部契約はUNVERIFIED_AFTER_RESEARCH。
- **純電源OFF→ON**: 天井はNOT_APPLICABLE。内部ボーナス/告知状態の保持・初期化は直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。
- **ゲーム数/天井**: 天井非搭載。
- **モード/状態**: AT/ARTモード、高確/CZ等は非搭載。設定変更専用分布なし。
- **有利区間**: 朝一物差し上NOT_APPLICABLE_NORMAL_TYPE。
- **朝一恩恵/不利**: 比較可能な設定変更専用の主要恩恵/不利要素は確認できず。
- **変更判別**: 本機固有ガックン、朝一ランプ/表示/出目の確定契約はUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 設定変更専用の比較可能な公開数値なし。

## 2021-12-10群 — CLOSED / 1機
1. **パチスロ ミクちゃんとイドムンのミラクルチャレンジ — No.1451 / DONE**

## 次回本線の再開地点
- **No.1452候補「パチスロうまい棒」** — 導入日 **2021-12-13**。次回はここから最優先確認・処理する。
- 2021-12-13は1gekiカレンダー上パチスロ1機だが、登録後にPB/地域先行/別型式/延期差を再監査してCLOSED判定する。
- その次は2021-12-20群。既知候補は「パチスロ 戦姫絶唱シンフォギア 勇気の歌」「沖ドキ！DUO」「沖ドキ！DUO-30」「シンデレラブレイド4」「秘宝伝 解き放たれた女神」「パチスロ リング 運命の秒刻」。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-06_antonio-inoki-mo-moeru-pachislot-ki.md`（アントニオ猪木も燃えるパチスロ機）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-06-25_triple-crown-30.md`（トリプルクラウン-30）**。
- 今回は本線No.1451と12/10群CLOSED、およびNo.1450欠落復旧を優先し、遡及QAカーソルは進めていない。

## GitHub保存
- No.1450 main復旧 commit: `6b5303bc3e1f96f2bf705ae5a941053408facde4`
- No.1451追加 commit: `31b7bdb53339e1ae7af6584cd8282f4177a94d64`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1451
- https://news.p-world.co.jp/articles/18641/nippon
- https://news.p-world.co.jp/articles/18512/greenbelt
- https://www.pidea.jp/articles/1636523607
- https://p-bomb.co.jp/industry/hall/2703/
- https://p-bomb.co.jp/industry/new-machine/3167/
- https://hazuse.com/machine/pachislot/1S0459/
- https://1geki.jp/slot/s_miku_ido/
- https://1geki.jp/slot/s_miku_ido/1/
- https://www.p-world.co.jp/machine/database/9531
- https://p-kn.com/slot/3707/

### 2021-12-10境界監査
- https://1geki.jp/newmachinecalender/202112/
