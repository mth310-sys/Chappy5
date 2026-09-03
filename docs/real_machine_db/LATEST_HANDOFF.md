# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **514**
- latestMachineAdded: **パチスロ「ケロット」～スウィートver.～**（山佐 / 2010-09-06 / BACKFILL）
- latestRecord: `docs/real_machine_db/machines/2010-09-06_kerot-sweet-ver.md`
- chronologicalFrontier: **2010-09-27**
- frontierLatestMachine: **リングにかけろ1 ～黄金の日本Jr.編～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線513実レコード「リングにかけろ1 ～黄金の日本Jr.編～」を再取得。
- `INDEX.md` は旧地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **513** / chronologicalFrontier **2010-09-27**。
- LATEST_HANDOFF指定の9/27同日・同時期漏れ監査を継続。`マイジャグラー` はcode searchでは見えなかったが、実ファイル `2010-09-06_my-juggler.md` を直接再取得し既登録を確認したため重複追加しなかった。
- 同じ2010-09-06導入の **パチスロ「ケロット」～スウィートver.～** は実ファイル未登録を確認し、514件目として遡及追加。
- 本機は前線より古いBACKFILLのため `chronologicalFrontier` は **2010-09-27** のまま維持する。

## 514 — パチスロ「ケロット」～スウィートver.～

- メーカー: **山佐**
- 導入: **2010-09-06**（パチビー具体日、山佐公式2010年9月稼働で整合）
- 世代/タイプ: **5号機 / ノーマルAタイプ / 3GプチRT**
- 機械割: **98.5 / 98.5 / 99.5 / 99.5 / 102.5 / 105.0%**
- BIG: **1/166.3 / 1/188.3 / 1/160.6 / 1/181.0 / 1/145.6 / 1/148.9**
- REG: **1/250.1 / 1/212.7 / 1/264.2 / 1/222.9 / 1/318.1 / 1/303.4**
- ボーナス合算: **全設定約1/99.9**（山佐公式）
- 50枚/1000円: **35.63 / 38.73 / 35.92 / 38.91 / 35.87 / 39.19G**（パチマガスロマガ公式アーカイブ）
- SWEET BONUS: **約200枚**、REG: **約40枚**。
- オレンジ入賞後: **3GプチRT**。
- P-WORLD本文のREG約48枚表記は、同ページ役構成・パチビー・パチマガスロマガの約40枚と競合するため `CONFLICT`。多数一致の40枚を主値として保持。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — ケロット～スウィートver.～

- ゲーム数天井・規定G数解除は確認なし。`gameCounterReset` / `ceilingAfterReset` は **NOT_APPLICABLE_FOR_GAME_COUNT_CEILING**。
- AT/ART朝一モード、高確/CZ/ART状態、有利区間は非該当。有利区間は5号機のため **NOT_APPLICABLE**。
- 設定変更、据え置き、単純電源OFF→ONの本機固有挙動は、表記揺れ・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン」を組み替えて探索したが直接高信頼本文を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 3GプチRTの設定変更/電断時処理も直接資料未回収のため推測しない。
- 朝一高確、天井短縮、CZ優遇等のリセット恩恵/不利は確認なし。
- 本機固有のガックン、初期出目、液晶状態等の変更判別も `UNVERIFIED_AFTER_RESEARCH`。

## CONFLICT / 注意

- REG純増は主値 **約40枚**。P-WORLDの台紹介本文だけ約48枚だが、同ページ役構成は40枚、パチビー/パチマガスロマガも40枚。平均しない。
- `マイジャグラー` は検索インデックス結果だけで未登録判定しない。実ファイル `docs/real_machine_db/machines/2010-09-06_my-juggler.md` が存在するため既登録。
- 遡及追加を行っても時系列前線は後退させない。現在の `chronologicalFrontier` は2010-09-27。

## 主要出典（取得日 2026-09-04）

- 山佐ネクスト公式: `https://yamasa-next.co.jp/model_klts/`
- パチビー: `https://www.pachibee.jp/machines/index/210070010`
- K-Navi: `https://p-kn.com/slot/1279/26646/`
- パチマガスロマガ公式アーカイブ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/174/a.php`
- パチマガスロマガ公式アーカイブ（1000円あたりゲーム数）: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/174/c.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6065`

## 今回のGitHub更新

- 514 ケロット～スウィートver.～追加: `docs/real_machine_db/machines/2010-09-06_kerot-sweet-ver.md`
- LATEST_HANDOFF: このコミット。

## 次回再開地点

1. **recordCount 514 / chronologicalFrontier 2010-09-27**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. 2010年9月の漏れ監査を継続。**パチスロ ピンポン**はコミックナタリーで9月6日より全国順次稼働予定が確認できる一方、K-Navi全国一斉導入カレンダーは10月4日表記なので、地域差/全国一斉導入定義を分離してrepo実登録を確認する。
3. **ロケットパニック**はK-Navi全国一斉導入が2010-10-04。9月機として推測配置せず、9月境界を閉じた後の10月候補として扱う。
4. 9/27同日群・9月月粒度機の漏れを閉じ、未登録なら最古の具体導入日から追加。既登録はファイル実体を確認し重複追加しない。
5. 遡及QAは既存正本の **Jackまで補完済み + Thunder既収集済み**を維持。新規時系列前進を止めず、次の実在resetBehavior欠損pathが一意確定できた時のみ補完する。
