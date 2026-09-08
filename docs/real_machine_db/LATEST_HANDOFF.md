更新日: 2026-09-08

## 現在地点
- recordCount: **1017**
- latestRecordAdded: **パチスロ「メタルギア ソリッド スネークイーター」 / METAL GEAR SOLID SNAKE EATER**（KPE）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-10-17_metal-gear-solid-snake-eater.md`
- chronologicalFrontier: **2016-10-17**
- frontierLatestMachine: **メタルギア ソリッド スネークイーター — No.1017**
- schema: **resetBehavior v0.7**
- status: **2016-10-11_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-10-17_GROUP_OPEN**

## 今回の同期 / 境界監査
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1016実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり `LATEST_HANDOFF.md` + 実レコード + 最新mainを進捗正本として使用。既存性能値はやり直していない。
- main正本は **1016件 / chronologicalFrontier 2016-10-11 / 10/11群OPEN** から継続。
- 2016年導入日カレンダー、当時解析、メーカー/業界名を変えて10/11群を再横断。10/11は既登録 **ロード オブ ヴァーミリオン**のみを確認し、追加未登録機を固定できなかったため **2016-10-11_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とした。
- 10/12〜10/16境界を導入日一覧・当時新台記事で監査し、新たな全国導入本線を固定できなかったため10/17群へ前進。
- 10/17群は少なくとも **メタルギア ソリッド スネークイーター**（KPE）と **プリシラと魔法の本**（NET）を複数資料で確認。
- handoff先頭候補だったメタルギアをGitHub内検索し既存レコードなしを確認、No.1017として追加。

## No.1017 — パチスロ「メタルギア ソリッド スネークイーター」
- manufacturer: **KPE / KPE・高砂販売**
- releaseDate: **2016-10-17**
- formalModelName: **メタルギアソリッド／KG**
- certificationNumber: **6S0635**
- generation/system: **5号機 / 5.5号機期 / 疑似ボーナス+ART / 自力継続型ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_MODE_STATE_PARTIAL**

### identity
- コナミアミューズメント公式アーカイブで **2016年10月稼働開始 / 5号機ART** を確認。
- K-Naviの2016-07-19プレス発表会記事でKPE・高砂販売による新機種を確認。
- HAZUSEで **2016-10-17 / KPE / 型式メタルギアソリッド／KG / 検定6S0635** を固定。
- PiDEAの2016-08-19機械選定記事は納品 **10/16〜**、当時攻略記事は **10/17導入開始**で一致し、日付競合なし。

### performanceCore
- 機械割: **97.5 / 98.9 / 100.6 / 103.9 / 106.8 / 110.6%**。
- 主要初当たりは **疑似ボーナス+ART合算**: **1/266.9 / 258.6 / 251.1 / 240.4 / 232.7 / 220.2**。
- 50枚ベース: **約47G**。
- ART純増: **約2.0枚/G**。
- BIG: **60G継続**の疑似ボーナス、REG: **30G継続**。
- ART「スネークイーター作戦」はゲーム数不定の自力継続型。解析資料では **平均約350G / 期待獲得約700枚**の公表値紹介あり。
- 通常最大天井: **1280G + 最大前兆32G**。

### resetBehavior v0.7
- 設定変更: **天井進捗RESET**。通常モードに関係なく、設定変更専用の **200G / 800G / 1280G**天井抽選を行う。
- 据え置き: **天井進捗・内部モードCARRYOVER** とする当時朝一資料に整合。
- 純電源OFF→ON: 当時朝一比較表で **天井・内部モードともCARRYOVER**。
- 設定変更時の内部モードA〜Dそのものの初期振り分け、および高確等の細分化内部状態初期振り分けは、検索語/資料系統を変えた再探索後も直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- ガックン: 当時解析では設定変更時も **なし / 判別無効**。メーカー保証の確定契約ではないため `GACKUN_NOT_USEFUL_REPORTED_BY_CONTEMPORARY_ANALYSIS`。

### 公開朝一数値 — 設定変更時天井G数振り分け
| 設定 | 200G | 800G | 1280G |
|---:|---:|---:|---:|
| 1 | 29.68% | 46.88% | 23.44% |
| 2 | 32.62% | 44.92% | 22.46% |
| 3 | 29.68% | 46.88% | 23.44% |
| 4 | 39.06% | 40.63% | 20.31% |
| 5 | 34.37% | 43.75% | 21.88% |
| 6 | 39.06% | 40.63% | 20.31% |

- 設定変更時は設定1でも **76.56%**、設定6では **79.69%**で800G以内の天井が選ばれる。
- 通常時のモード別天井抽選とは別契約で、設定変更時はモード非依存の専用振り分け。

## 2016-10-17群 — OPEN
登録済み:
- **メタルギア ソリッド スネークイーター**（KPE）— No.1017

未処理確認済み候補:
- **プリシラと魔法の本**（NET）— 2016-10-17導入を当時解析・複数一覧で確認。次回先頭。

次回監査:
- 10/17同日をメーカー名・型式名・2016年新台一覧・当時業界記事で再横断し、メタルギア/プリシラ以外の未登録機がないか確認する。
- まずプリシラと魔法の本をGitHub重複確認後、性能コア + resetBehavior v0.7で収集する。
- 10/17群完了後、10/18〜10/23境界を監査し、10/24群へ前進。2016年一覧では **クランキーセレブレーション**等が10/24候補として確認されているため、一次/当時資料で再固定してから処理する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、次回以降も2006-03-27より後の既存未QAレコードを最新main実体から順次特定して補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1017を再取得。
2. **1017件 / chronologicalFrontier 2016-10-17 / 10/17群OPEN** を正本として継続。
3. **プリシラと魔法の本**を次の未処理先頭として、既存レコードなしを確認してから導入日・正式型式・メーカー・性能コア + resetBehavior v0.7を収集する。
4. 10/17同日全メーカー監査を並行し、漏れがなければ群をCLOSED。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替えて十分な再探索後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1017 メタルギア ソリッド スネークイーター
- コナミアミューズメント 公式機種アーカイブ: https://www.konami.com/amusement/psm/archive/ps/2016/mgs_se/
- K-Navi プレス発表会（2016-07-19）: https://p-kn.com/topics/exhibition/1496/
- HAZUSE 本機ページ: https://hazuse.com/machine/pachislot/6S0635/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/6S0635/genre/201/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/6S0635/genre/207/
- PiDEA 機械選定（2016-08-19）: https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E3%83%A1%E3%82%BF%E3%83%AB%E3%82%AE%E3%82%A2%E3%82%BD%E3%83%AA%E3%83%83%E3%83%89%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- P-WORLD: https://www.p-world.co.jp/machine/database/8074
- 期待値見える化 天井/モード: https://slotjin.com/zone/metalgearsolid/
- すろぱちくえすと 朝一リセット: https://www.slopachi-quest.com/article/metal-gear-reset/
- すろぱちくえすと 設定差/モード: https://www.slopachi-quest.com/article/metal-gear-settei/
- すろぱちくえすと 2016年導入日一覧: https://www.slopachi-quest.com/article/%E3%80%90%E5%B0%8E%E5%85%A5%E6%97%A5%E9%A0%86%E3%80%912016%E5%B9%B4%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E4%B8%80%E8%A6%A7%E3%81%BE%E3%81%A8%E3%82%81/
- ピロ式パチスロ記: https://piro-shiki.com/metalgearsolid-kaiseki/

### 10/17次候補 プリシラと魔法の本
- ピロ式パチスロ記: https://piro-shiki.com/purishira-kaiseki/
- 2016年導入日一覧: https://www.slopachi-quest.com/article/%E3%80%90%E5%B0%8E%E5%85%A5%E6%97%A5%E9%A0%86%E3%80%912016%E5%B9%B4%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E4%B8%80%E8%A6%A7%E3%81%BE%E3%81%A8%E3%82%81/
