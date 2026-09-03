# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **437**
- latestMachineAdded: **バジリスク ～甲賀忍法帖～**
- latestRecord: `docs/real_machine_db/machines/2009-12-14_basilisk-kouga-ninpouchou.md`
- chronologicalFrontier: **2009-12-14**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- GitHub最新mainの `README.md`、最新ミッション `CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、最新436 `2009-12-14_bakusou-rettou.md` を再読。
- INDEXは旧19件地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋実レコードを優先。
- 開始時mainは436件 / chronologicalFrontier 2009-12-14。
- 直前HANDOFF指定の初代 `バジリスク ～甲賀忍法帖～` を次の未処理候補として監査。候補パスは追加直前までNot Found。
- K-Naviが2009-12-14ホール導入開始を明記。P-WORLD、旧パチマガ、5号機回顧DBを横断して性能コア＋resetBehavior v0.7を収集。
- 後継「バジリスク～甲賀忍法帖～絆」（2014）、「II」「絆2」「天膳」のreset解析は別機種として除外。
- 追加直前にLATEST_HANDOFFを再取得し436件地点のままで競合がないことを確認、437件目として追加。

## 437 — バジリスク ～甲賀忍法帖～ 要約

- メーカー: **ミズホ**
- 型式: **バジリスク1**
- 検定番号: **9S0771**
- ホール導入: **2009-12-14**（K-Navi）
- 世代: **5号機**
- システム: **ART / BC契機バトルART**
- BC合算: **1/128 → 1/93**
- 機械割: **97.1 / 99.5 / 102.1 / 106.2 / 110.1 / 119.0%**
- ART「バジリスクタイム」: **約+2.3枚/G**
- BC: **約45枚**
- 救済天井: **ART非当選BCが9連続すると、次回BC成立時のART突入確定**（BC9スルー後の10回目BC）

## resetBehavior v0.7

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`。K-Navi初代ページに「設定変更時はどうなる?」、旧パチマガ初代ページに「攻め時・ヤメ時・設定変更時」の専用項目が存在することまでは確認したが、取得できた本文では初代固有の変更時処理を回収できず。後継「絆」の値は流用しない。
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`。BCスルー進捗・ART関連状態の保持範囲を初代固有資料で確定できず。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。BCスルー回数、ART状態、初期リール/液晶状態の直接資料未回収。
- **gameCounterReset**: 通常G数天井ではなくBCスルー回数管理。設定変更時に9スルー進捗がクリア/引継ぎ/再抽選のどれかは `UNVERIFIED_AFTER_RESEARCH`。
- **ceilingAfterReset**: 設定変更専用短縮回数・別天井値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **mode/state**: 設定変更専用モード振分・状態処理は `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵/不利**: 初代固有の設定変更専用恩恵率・不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン、初期出目、液晶、BCスルー挙動等は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 設定変更専用モード振分・朝一当選率・リセット恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **50枚ベース**: `UNVERIFIED_AFTER_RESEARCH`。初代と後継の検索混入が非常に多く、初代固有値を確定できないため流用なし。

## 主要出典（取得日 2026-09-03）

- K-Navi 初代: `https://p-kn.com/slot/1124/`
- P-WORLD 初代: `https://www.p-world.co.jp/machine/database/5796`
- 旧パチマガ 初代機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/32/mizuho_slot_32.php`
- 5号機クロニクル ユニバーサル系一覧: `https://5goki.com/universal`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という直前進捗を維持。
- 新規本線収集を止めず、2006-10以降の最初のresetBehavior欠損機を後続QAで補完する。

## 次回再開地点

1. **recordCount 437 / chronologicalFrontier 2009-12-14**。
2. まず **2009-12-14同日群の残件最終監査**を継続。PachiBee / P-WORLD / K-Navi / 当時業界記事 / メーカー別一覧で同日を閉じる。
3. 同日群に追加すべき未登録機がなければ **2009-12-15以降**へ前進する。
4. `パチスロあしたのジョー`、`元祖！大江戸桜吹雪` は2009-12-10前後の発表記事だけを導入日に流用せず、具体ホール導入日を確定した時点で正しい時系列位置へ追加する。
5. 2009-12-15の検定記事には `とんでも戦士ムテキングT`、`カラスZ`、`パチスロワニワニパニックS` 等の型式が見えるが、**検定告示日を導入日にしない**。製品名・メーカー・ホール導入日を別資料で確定してから本線へ置く。
6. 追加前に必ずrepo既存検索＋LATEST_HANDOFF再取得を行い、重複・他リレー競合を防ぐ。
7. 性能コア＋resetBehavior v0.7を同基準で収集。競合は平均せず `CONFLICT`、十分な再探索後のみ `UNVERIFIED_AFTER_RESEARCH`。
8. 完全再現用の細かな内部抽選は対象外。
