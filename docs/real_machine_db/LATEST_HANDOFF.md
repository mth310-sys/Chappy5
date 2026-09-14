更新日: 2026-09-15

## 現在地点
- recordCount: **1765**
- latestRecordAdded: **プリズムナナ — No.1765**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-12-08_prism-nana.md`
- chronologicalFrontier: **2025-12-08**
- schema: **resetBehavior v0.7**
- status: **2025-12-08_GROUP_OPEN_1_OF_3_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1764を再同期。
- INDEXは旧スナップショット（19件）のため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- mainは開始時点ですでにNo.1764 `バーニングエクスプレス` まで進行していたため、No.1760〜1764を無駄に再調査せずNo.1765から継続。
- No.1765 `プリズムナナ` を追加。
- 2025-12-08群はパチビー/ALL7で `プリズムナナ / 銀河英雄伝説 Die Neue These / スマスロ 化物語` の3機が一致。現在 **OPEN 1/3**。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1765 — プリズムナナ
- path: `docs/real_machine_db/machines/2025-12-08_prism-nana.md`
- manufacturer: **カルミナ**
- formalModel: **LプリズムナナCC**
- inspectionCode: **5S0937**
- releaseDate: **2025-12-08**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.7 / 98.5 / 100.1 / 105.5 / 110.1 / 114.9%**
- ST初当り: **1/351.8 / 1/346.9 / 1/337.2 / 1/306.6 / 1/290.1 / 1/278.6**
- base: **約31.2G/50枚**
- netIncrease: **約3.0枚/G / 白7系約7.0枚/G**
- basicPayout: **SUPER PRISM BONUS約280枚 / PRISM BONUS約120枚 / PRISM CHANCE約60枚 / SPECIAL BONUS平均約800枚**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1765 resetBehavior v0.7
- 設定変更時: 天井ゲーム数・周期数RESET、モード・状態再抽選。
- 通常ゲーム数天井 **899G+α → 555G+α**へ344G短縮。
- 通常周期天井 **最大7周期 → 最大5周期**へ短縮。
- 設定変更時は通常B以上。全設定共通モード振り分け: **通常B 33.98% / チャンス15.63% / 天国50.00% / 超天国0.39%**。天国以上合計50.39%。
- 電源OFF→ON時は天井ゲーム数・周期数・モード・状態を引継ぎ。プリズムポイントは表示0pt、マジカルリール演出カウンターは「??」表示だが内部的に引継ぎ。
- 据え置きは純電断直接比較と整合するCARRY_OVERとして扱うが、据え置き専用一次表が不足するため `CARRY_OVER_POWER_CYCLE_DIRECTLY_SUPPORTED` として直接性を分離。
- 設定変更時は有利区間RESET。エンディング後の有利区間リセットでは上位ST直行恩恵があるが、資料は設定変更時を明示除外するため朝一恩恵に混入しない。
- 有利区間ランプでは変更/据え置き判別不可。
- 朝一555G+αを明確に超えてST非当選なら据え置き濃厚材料。
- 設定変更時の演出キャラはイタル、開始ステージは通学路。純電断側の同項目は調査中のため単独確定判別には使用しない。
- 本機固有ガックン条件/発生率は表記揺れ・正式型式・メーカー名と複数検索語で再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の有利区間そのものの高優先直接文言は `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。

## conflicts / source normalization
- 設定別ST初当り・機械割は必勝本、1geki、パチマガスロマガ系、後発解析で一致し重大CONFLICTなし。
- 型式の全角/半角表記 `ＬプリズムナナＣC` / `LプリズムナナCC` は同一型式として正規化。
- 有利区間リセット後の上位ST直行はエンディング後恩恵であり、設定変更時は明示除外。朝一恩恵とは分離。

## sources summary
retrievedAt: 2026-09-15
### No.1765
- HAZUSE: 型式、検定番号、導入日、純増、ベース、天井。
- パチ&スロ必勝本: 設定別ST初当り/機械割、設定変更 vs 電源OFF→ONの天井/周期/モード/状態/ポイント比較。
- 1geki: 型式、検定番号、設定別性能、朝一解析更新。
- パチビー: 導入日、基本獲得枚数、CZ/ST基本性能。
- なな徹: 設定変更時モード振り分け、短縮天井、有利区間リセットと設定変更時除外恩恵。
- パチマガスロマガ系: モード別周期天井、設定変更時モード振り分け。
- ちょんぼりすた: 設定変更/電源OFF→ON比較、モード振り分け。
- パチビー/ALL7 2025年12月導入一覧: 12/08境界監査。

## 2025-12-08境界 — OPEN 1/3 known canonical
1. **プリズムナナ — No.1765 DONE**
2. **銀河英雄伝説 Die Neue These — No.1766 candidate**
3. **スマスロ 化物語 — No.1767 candidate**

boundaryAudit:
- パチビー2025年12月導入日一覧で12/08のパチスロは上記3機。
- ALL7の2025年12月導入一覧も3機で一致。
- 3機処理後にPB/別型式/地域先行/延期/段階導入を再監査してCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1765と本handoffを確認。
- **No.1766候補「銀河英雄伝説 Die Neue These」— 2025-12-08** から継続する。
- 続いて **No.1767候補「スマスロ 化物語」** を処理し、2025-12-08境界を再監査してCLOSED判定する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- GitHub実体順のカーソル直後を安全に一意固定できるまで外部導入順から推測更新しない。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**
