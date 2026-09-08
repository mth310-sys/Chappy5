更新日: 2026-09-09

## 現在地点
- recordCount: **1037**
- latestRecordAdded: **パチスロ モンスターハンター～狂竜戦線～**（エンターライズ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-01-10_monster-hunter-kyouryu-sensen.md`
- chronologicalFrontier: **2017-01-10**
- frontierLatestMachine: **パチスロ モンスターハンター～狂竜戦線～ — No.1037**
- schema: **resetBehavior v0.7**
- status: **2017-01-03_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2017-01-04_TO_2017-01-08_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / 2017-01-09_TO_10_GROUP_OPEN_RELEASE_DATE_DEFINITION_AUDIT_REQUIRED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1036実レコードを再取得して開始。
- main正本は **1036件 / chronologicalFrontier 2017-01-03 / 1/03群OPEN**。過去チャット上の古い地点へ戻らず、handoffを優先した。
- 2017-01-03同日を「1月3日/パチスロ/新台/導入」等で再監査。弱虫ペダル以外の全国導入パチスロを固定できず、既存releaseDate conflict（1/3 vs 1/9納品予定 vs 1/10）はNo.1036内で保持したまま **2017-01-03_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とした。
- 1/04〜1/08境界でも独立した全国導入パチスロ本線を固定できずCLOSED。
- 次の本線としてエンターライズ **パチスロ モンスターハンター～狂竜戦線～** をNo.1037登録。
- 同機は関西等で2016-12-19先行、K-Navi 2017-01-09、HAZUSE/複数解析 2017-01-10の差がある。地域先行を全国本線へ早取りせずcanonicalを2017-01-10、`CONFLICT_RELEASE_DATE_2016_12_19_EARLY_VS_2017_01_09_VS_2017_01_10` を保持。
- 1/10同日には **シスタークエスト～時の魔術師と悠久の姉妹～** の実機導入開始をドラス系プレス/アプリ説明で確認したため、群はOPENのまま。

## No.1037 — パチスロ モンスターハンター～狂竜戦線～
- manufacturer: **エンターライズ**
- releaseDate canonical: **2017-01-10**
- releaseDate conflict: **2016-12-19先行 vs 2017-01-09 vs 2017-01-10**
- formalModelName: **モンスターハンター狂竜戦線／ZS**
- certificationNumber: **6S1097**
- generation/system: **5号機 / 5.5号機期 / A+ART / クエストボーナス+ART / モード・スルーテーブル管理**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT**

### performanceCore
- 機械割: **97.5 / 98.6 / 100.6 / 103.8 / 107.6 / 112.2%**。
- クエストボーナス: 設定1〜5 **約1/140**、設定6 **約1/129**。
- ART初当たり: **1/443.8 / 404.4 / 403.7 / 320.5 / 319.3 / 203.8**。
- baseGamesPer50: **約32〜34G/50枚**。HAZUSE約33〜32G、ちょんぼりすた約34Gのため平均せずレンジ保持。
- ART「狩猟戦線」純増 **約2.0枚/G**、初期ストックパート **20〜100G**。
- クエストボーナス獲得 **約40枚**。
- ゲーム数天井: ボーナス及びART間 **777GでART**。

### resetBehavior v0.7
- settingChangeBehavior: **777G天井RESET / スルー・モードテーブルRESELECT / 内部状態RESELECT / 液晶バルバレ / ART・ボーナス中状態RESET**。
- carryOverBehavior: 据え置きはゲーム数・スルー/モード・状態を継続する攻略契約。純電源OFF→ONは一撃の直接比較表で引継ぎ確認。
- powerCycleBehavior: **ゲーム数天井・モード・状態CARRYOVER**。液晶はバルバレ。ART中はインパクト告知、ボーナス中は捜索クエストへ表示復帰。
- gameCounterReset: 設定変更で777G進捗RESET、電断/据え置きでCARRYOVER。
- ceilingAfterReset: 設定変更専用の固定短縮777G天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetDetection: 設定変更/純電断とも朝一バルバレのためステージ単独判別不可。本機固有の確定ガックン等は **NONE_CONFIRMED_AFTER_RESEARCH**。

### public reset numeric data
設定変更時スルーテーブル:
| テーブル | 設定1〜3 | 設定4〜6 |
|---|---:|---:|
| 1 | 46.9% | 36.7% |
| 2 | 25.0% | 25.0% |
| 3 | 14.8% | 14.8% |
| 4 | 3.1% | 3.1% |
| 5 | 10.2% | 20.3% |

設定変更時内部状態:
| 設定 | 通常 | 高確 | 超高確 | 確定高確 |
|---:|---:|---:|---:|---:|
| 1〜3 | 75.00% | 23.83% | 0.78% | 0.39% |
| 4〜6 | 66.80% | 30.86% | 1.56% | 0.78% |

- 高確以上合計: **設定1〜3 25.00% / 設定4〜6 33.20%**。
- 設定変更時テーブル5: **10.2% / 20.3%**。

## data quality
- エンターライズ公式特設サイト、メーカー発表転載、HAZUSE、一撃、ちょんぼりすた、K-Naviを横断。
- 2016-12-19先行を全国導入として早取りせず、1/09・1/10差をCONFLICT保持。
- 50枚ベースの32〜34G差は平均化していない。
- リセット挙動は設定変更と純電源OFF→ONを分離。一撃の直接比較表を主軸に状態/テーブル資料で照合。

## 境界監査
- **2017-01-03_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- **2017-01-04_TO_2017-01-08_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。
- **2017-01-09_TO_10_GROUP_OPEN_RELEASE_DATE_DEFINITION_AUDIT_REQUIRED**。
- chronologicalFrontier: **2017-01-10**。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1037を再取得。
2. **1037件 / chronologicalFrontier 2017-01-10 / 1/09〜10群OPEN** を正本として継続。
3. 次の未処理機種は **ハイライツ・エンタテインメント「シスタークエスト～時の魔術師と悠久の姉妹～」** をNo.1038候補として処理。ドラス系プレス/アプリ説明で2017-01-10実機導入開始を確認済み。
4. 性能コア＋resetBehavior v0.7を同時収集。天井、設定変更/据え置き/純電断、モード・状態、朝一数値、変更判別を検索語・資料系統を変えて十分に再探索する。
5. その後2017-01-09〜10群を全メーカー横断監査し、未登録がなければCLOSED。1/09と1/10の祝日/地域/納品定義差は機種別に保持する。
6. 既登録の弱虫ペダルを1/10側へ重複追加しない。

## 主要出典 — 取得日 2026-09-09
### No.1037 モンスターハンター～狂竜戦線～
- エンターライズ公式: https://www.enterrise.co.jp/slot/mhk/
- 4Gamer（コムシード発表転載）: https://www.4gamer.net/games/369/G036935/20170120081/
- HAZUSE: https://hazuse.com/machine/pachislot/6S1097/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_monhan_k/3/
- 一撃 モード/テーブル: https://1geki.jp/slot/s_monhan_k/43/
- 一撃 状態: https://1geki.jp/slot/s_monhan_k/42/
- 一撃 ART: https://1geki.jp/slot/s_monhan_k/81/
- 一撃 ボーナス: https://1geki.jp/slot/s_monhan_k/61/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/26726/
- K-Navi: https://p-kn.com/slot/2631/

### 次回候補 シスタークエスト
- ドラス系プレス（実機2017-01-10導入の説明）: https://www.value-press.com/pressrelease/176619
- ドラス シスクエくじ発表: https://www.value-press.com/pressrelease/176041
