更新日: 2026-09-09

## 現在地点
- recordCount: **1062**
- latestRecordAdded: **ドキドキマンゴー-30**（パイオニア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-04-03_dokidoki-mango-30.md`
- chronologicalFrontier: **2017-04-03**
- frontierLatestMachine: **ドキドキマンゴー-30 — No.1062**
- schema: **resetBehavior v0.7**
- status: **2017-04-03_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1061実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを直近進捗正本として採用。
- 開始時mainは **1061件 / chronologicalFrontier 2017-03-21 / 2017-03-21_GROUP_OPEN**。次候補は「ドキドキマンゴー」。
- ドキドキマンゴーの日付を公式・当時業界・K-Navi/P-WORLD等で再検証した結果、当時展示会には「30パイは2017-03-21から導入予定」という記載がある一方、パイオニア公式更新履歴は **2017-04-03『ドキドキマンゴー/ドキドキマンゴー-30 全国稼働開始』** と明記。K-Naviも30φのホール導入開始を2017-04-03とする。
- 本DBの時系列本線は全国導入をcanonicalとするため、3/21を地域先行/予定情報として分離し、No.1062は **2017-04-03** に登録した。
- 3/21同日群を再監査。登録済みのアナザーゴッドポセイドン-海皇の参戦-、パチスロ攻殻機動隊S.A.C. 2nd GIG、防空少女ラブキューレ以外に全国導入本線へ固定できる未登録機を今回確認できなかったため **2017-03-21_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2017-03-22〜2017-04-02の境界も日付検索・当時新台資料で再監査し、新たな全国導入本線を固定できなかったため **BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。次の明確な全国導入群は2017-04-03。

## No.1062 — ドキドキマンゴー-30
- manufacturer: **パイオニア**
- releaseDate: **2017-04-03**（メーカー公式全国稼働開始）
- regional/advance note: **2017-03-21 30φ先行/予定情報あり**
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ノーマルA / 完全告知 / 30φ / BIG+MID+REG**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98 / 99 / 100 / 103 / 106 / 110%**。
- BIG: **1/278 / 275 / 270 / 259 / 245 / 232**。
- MID: **1/1260 / 1129 / 1057 / 923 / 809 / 762**。
- REG: **1/840 / 840 / 829 / 809 / 799 / 753**。
- ボーナス合算: **1/179 / 175 / 171 / 161 / 152 / 144**。
- 50枚ベース: **約35G/50枚**。
- BIG最大300枚 / MID最大200枚 / REG最大100枚。
- ノーマルタイプのためAT/ART純増は `NOT_APPLICABLE`。

### resetBehavior v0.7
- ゲーム数天井・周期天井・AT/ART/CZ・ゲーム数モード: `NOT_APPLICABLE`。
- 設定変更専用の短縮天井・朝一高確・専用モード・初当り優遇: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 据え置き/純電源OFF→ONで客側朝一行動を変える公開天井・状態契約: `NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。
- 本機固有の確定的ガックン・初期出目・ハイビスカス/ランプ判別: `NONE_CONFIRMED_AFTER_RESEARCH`。

### dataQuality / conflicts
- `RELEASE_DATE_SCOPE_DIFFERENCE`: 2017-03-21（30φ地域先行/予定） vs 2017-04-03（メーカー公式全国稼働開始）。平均・混同せず定義差を保持し、全国時系列canonical=2017-04-03。
- 30φと25φはボーナス確率が異なるため独立レコード対象。
- formalModelName / certificationNumber は表記揺れ・メーカー・型式・検定番号等を変えて再探索後も今回直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 2017-04-03群監査
- status: **OPEN**。
- 登録済み:
  1. **ドキドキマンゴー-30 — No.1062**。
- 未処理候補:
  1. **ドキドキマンゴー-25** — パイオニア。K-Navi/P-WORLDとも2017-04-03。30φとスペック差があるため独立レコード候補。
  2. **パチスロ 機動戦士Zガンダム** — Bisty。HAZUSEで2017-04-03、型式 `パチスロ機動戦士ZガンダムS`、検定6S1412を確認済み。
  3. **恵比寿マスカッツ** — ニューギン。複数解析で2017-04-03導入を確認。
- 4/3群には他機種もあり得るため、上記処理後に全メーカー横断監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04_rock-you-queen-3.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_gold-shio-30.md`。
- 今回は時系列本線を優先し、遡及QAカーソルは変更していない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1062を再取得。
2. **1062件 / chronologicalFrontier 2017-04-03 / 4/3群OPEN** を正本として継続。
3. 次の未処理候補 **「ドキドキマンゴー-25」** をNo.1063候補として性能コア＋resetBehavior v0.7で処理。
4. 続いて **パチスロ 機動戦士Zガンダム → 恵比寿マスカッツ** を候補順に処理し、4/3同日全メーカー監査を実施。
5. 遡及QAは `2006-05_gold-shio-30.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1062 ドキドキマンゴー-30
- パイオニア更新履歴（2017-04-03 全国稼働開始）: https://www.slot-pioneer.co.jp/news.html
- パイオニア「ドキドキマンゴー-30 発売のお知らせ」: https://www.slot-pioneer.co.jp/information/dokidoki_mango_30.html
- パチビー展示会記事（4/3予定、30φ3/21予定注記）: https://www.pachibee.jp/pparticles/view/924
- K-Navi ドキドキマンゴー30: https://p-kn.com/slot/2731/
- P-WORLD ドキドキマンゴー-30: https://www.p-world.co.jp/machine/database/8302
- スロスター当時記事（30φ約35G/50枚、4月上旬/沖縄3月下旬）: https://ameblo.jp/slostar/
- パチ7回顧/当時記事: https://pachiseven.jp/articles/detail/3333

### 次候補 / 4/3群監査
- K-Navi ドキドキマンゴー25: https://p-kn.com/slot/2730/
- P-WORLD ドキドキマンゴー-25: https://www.p-world.co.jp/machine/database/8301
- HAZUSE 機動戦士Zガンダム: https://hazuse.com/machine/pachislot/6S1412/
- ちょんぼりすた 恵比寿マスカッツ: https://chonborista.com/slot/newgin-slot/34518/

### 遡及QA 次カーソル
- `docs/real_machine_db/machines/2006-05_gold-shio-30.md`
