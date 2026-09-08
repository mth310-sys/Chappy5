更新日: 2026-09-08

## 現在地点
- recordCount: **1016**
- latestRecordAdded: **パチスロ ロード オブ ヴァーミリオン / LOAD of VERMILION**（七匠）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-10-11_load-of-vermilion.md`
- chronologicalFrontier: **2016-10-11**
- frontierLatestMachine: **パチスロ ロード オブ ヴァーミリオン — No.1016**
- schema: **resetBehavior v0.7**
- status: **2016-10-03_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-10-11_GROUP_OPEN_RELEASE_DATE_CONFLICT_AUDIT**

## 今回の同期 / 境界監査
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1015実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり `LATEST_HANDOFF.md` + 実レコード + 最新mainを進捗正本として使用。既存性能値はやり直していない。
- main正本は **1015件 / chronologicalFrontier 2016-10-03 / 10/03群OPEN** から継続。
- handoffで未処理先頭だった七匠 **「LOAD of VERMILION」** をGitHub内検索し、既存レコードなしを確認してNo.1016として追加。
- 導入日は早期予定資料に **2016-10-03** が残る一方、導入後のK-Navi・パチセブン・ちょんぼりすた等は **2016-10-11** で一致。業界記事も「10月より稼働開始予定」。本DBでは実導入系列の **2016-10-11** をcanonical、10/03を `CONFLICT_RELEASE_DATE_2016_10_03_PLAN_VS_2016_10_11_ACTUAL` として保持。
- 前回10/03群の全メーカー監査で残っていた未処理候補はLOAD of VERMILIONのみで、その実導入が10/11へ確定したため、10/03群は現時点で **CLOSED_FOR_CURRENT_RESEARCH** とする。
- 10/11群はLOAD以外の同日機種がないか追加横断監査が必要なためOPENを維持。

## No.1016 — パチスロ ロード オブ ヴァーミリオン / LOAD of VERMILION
- manufacturer: **七匠 / NANASHOW**
- releaseDate canonical: **2016-10-11**
- releaseDate conflict: **2016-10-03（早期販売予定資料）**
- formalModelName: **パチスロ ロードオブヴァーミリオンY**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / ART / ゲーム数上乗せ型ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_RELEASE_DATE_CONFLICT_IDENTITY_PARTIAL**

### performanceCore
- 機械割: **97.8 / 99.6 / 101.5 / 104.7 / 108.8 / 112.1%**。
- ART初当たり: **1/481.6 / 457.2 / 421.3 / 353.5 / 297.4 / 252.2**。
- 皇帝揃い: **1/8192、全設定共通**。
- 50枚ベース: **約45.0G**。
- ART純増: **約1.9枚/G**。
- ARTは固定枚数ではなくゲーム数上乗せ型。業界資料ではART期待継続ゲーム数 **約300G**。
- 通常天井: **ART間1568G + 最大前兆32G**。

### resetBehavior v0.7
- 設定変更: **ART間天井RESET / 通常モードRESELECT / 種族エンブレム・紅印数RESELECT**。
- 据え置き: **天井進捗CARRYOVER / エンブレム・紅印状態CARRYOVER** とする宵越し・変更判別資料に整合。
- 純電源OFF→ON: **朝一エンブレム表示がUNKNOWNになることは直接確認**。ただし本機固有の天井ゲーム数・内部通常モードの純電断保持を明記した比較表は、検索語・資料系統変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。一般論では補完していない。
- リセット専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機固有のメーカー保証ガックン: **NONE_CONFIRMED_AFTER_RESEARCH**。

### 公開朝一モード数値
| 設定 | 低確 | 通常 | 高確 | 天国 |
|---:|---:|---:|---:|---:|
| 1 | 71.1% | 25.0% | 3.1% | 0.8% |
| 2 | 42.2% | 50.0% | 6.3% | 1.6% |
| 3 | 70.3% | 25.0% | 3.1% | 1.6% |
| 4 | 40.6% | 50.0% | 6.3% | 3.1% |
| 5 | 68.8% | 25.0% | 3.1% | 3.1% |
| 6 | 31.3% | 50.0% | 12.5% | 6.3% |

設定変更時エンブレム:
- 人獣 50.0%
- 海種 25.0%
- 不死 25.0%

設定変更時紅印数:
- 1個 62.5%
- 2個 25.0%
- 3個 12.5%

- 朝一最初のチャンス目後、前日のエンブレム/紅印状態との一致・不一致を比較して据え置き/設定変更を推測可能。
- 電源OFF→ONのみでも表示自体はUNKNOWNになるため、朝一液晶を見ただけでは変更判別不可。

### conflicts
- `CONFLICT_RELEASE_DATE_2016_10_03_PLAN_VS_2016_10_11_ACTUAL`
  - 2016-10-03: P-Summaの2016-08-19時点販売予定資料。
  - 2016-10-11: K-Navi / パチセブン / ちょんぼりすた等の導入後機種DB・解析。

## 2016-10-11群 — OPEN
登録済み:
- **パチスロ ロード オブ ヴァーミリオン**（七匠）— No.1016

次回監査:
- 10/11同日をメーカー名・型式名・当時新台一覧・業界記事で再横断し、未登録機がないか最終確認する。
- HAZUSE等の2016年10月カレンダーでは10/03、10/11、10/17、10/24、10/31の導入群が確認できるため、10/11群を閉じたら10/12〜10/16境界監査後、10/17群へ前進する。
- 10/17候補として **「メタルギア ソリッド スネークイーター」**（KPE）が複数後年資料で示されるが、次回はメーカー/業界一次資料で導入日を再固定してから登録する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、次回以降も2006-03-27より後の既存未QAレコードを最新main実体から順次特定して補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1016を再取得。
2. **1016件 / chronologicalFrontier 2016-10-11 / 10/11群OPEN** を正本として継続。
3. 10/11同日全メーカー監査を完了し、追加未登録がなければ10/11群をCLOSED。
4. 10/12〜10/16境界を監査してから10/17群へ前進。
5. **メタルギア ソリッド スネークイーター**を先頭候補として、導入日・正式型式・メーカーを再確認し、性能コア + resetBehavior v0.7を収集する。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替えて十分な再探索後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1016 LOAD of VERMILION
- 七匠 公式製品一覧: https://www.nanashow.co.jp/product/
- グリーンべると（2016-09-30）: https://web-greenbelt.jp/00008989/
- K-Navi: https://p-kn.com/slot/2606/
- パチセブン: https://pachiseven.jp/machines/4955/cutout/4
- パチセブン ART: https://pachiseven.jp/machines/4955/cutout/6
- ちょんぼりすた: https://chonborista.com/slot/nanashow/24144/comment-page-3/
- すろぱちくえすと: https://www.slopachi-quest.com/article/lord-of-vermilion-settei/
- 2ndsight 天井/設定変更一覧: https://2ndsight.xyz/1768
- P-Summa 10/03予定側: https://psumma.jp/pachinko/25874/
- 中古実機型式名: https://store.shopping.yahoo.co.jp/nakaiticom/60004.html
