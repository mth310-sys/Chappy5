# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **434**
- latestMachineAdded: **炎の熱血教師 ～清原、健介、北斗編～**
- latestRecord: `docs/real_machine_db/machines/2009-12-07_honoo-no-nekketsu-kyoushi.md`
- chronologicalFrontier: **2009-12-07**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- GitHub最新mainの `README.md`、最新ミッション `CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、最新433 `2009-11_super-bingo-sp3.md` を再読。
- INDEXは旧19件地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋実レコードを優先。
- 開始時mainは433件。2009-11-24〜11-30を具体導入日・納品日・メーカー別で再監査したが、今回追加すべき未登録具体日パチスロは確定できなかった。
- `爆走列島` は2009-11-16発表だがPachiBeeでホール導入2009-12-14を確認。発表日を導入日に流用せず11月から除外。
- 次の明確な具体日群として2009-12-07を確認。repo未登録の `炎の熱血教師 ～清原、健介、北斗編～` を434件目として追加。
- 追加直前にLATEST_HANDOFFを再取得し433件地点のままで競合がないことを確認。

## 434 — 炎の熱血教師 ～清原、健介、北斗編～ 要約

- メーカー: **ロデオ**
- ホール導入開始: **2009-12-07**（K-Navi）
- 納品: **2009-12-06開始予定**（当時グリーンべると）
- 世代: **5号機**
- システム: **A+ART / CZ / 天井CZ**
- BIG合算: **1/442.81 → 1/397.19**
- 50枚ベース: **36.41G**
- ART「清原チャンス」: **50G / 純増約+1.8枚/G / 約90枚期待**
- 清原BIG約150枚 / 健介BIG約102枚 / 北斗BIG約61枚 / REG約34枚

## 機械割

- pacnk: **96.16 / 98.20 / 100.49 / 104.12 / 108.80 / 114.10%**
- 5号機クロニクル: **96.2 / 98.2 / 100.5 / 104.1 / 108.8 / 114.1%**
- 小数丸めで整合するためCONFLICTにはしない。

## 天井・CZ

- 全ボーナス後・ART終了後はCZへ。
- **CZ間600G消化で天井CZ**（K-Navi直接）。
- **ボーナス間500Gで仮天井＝超高確**、ベル/チェリーでARTストック抽選（pacnk、旧回顧資料で照合）。

## resetBehavior v0.7

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`。旧パチマガに専用「攻め時・ヤメ時・設定変更時」項目の存在までは確認したが本文具体値を取得できず。
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`。旧天井資料でも本機の宵越しは「？」で、500G/600G進捗の保持を確定できない。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。天井進捗・CZ/RT状態・ナビストックの復帰挙動を確定できない。
- **ゲーム数/天井**: ボーナス間500G仮天井、CZ間600G天井CZは確認。設定変更時clear/retainは未確定。
- **モード/状態**: 朝一専用モード振分、CZ/高確/ARTストックの設定変更時処理は未確定。
- **有利区間**: `NOT_APPLICABLE`（5号機）。
- **朝一恩恵/不利**: リセット固有の短縮・優遇・不利は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン、初期出目、液晶、朝一CZ等を検索したが `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- K-Navi: `https://p-kn.com/slot/1095/`
- 当時グリーンべると/P-WORLDニュース: `https://news.p-world.co.jp/articles/3671/greenbelt`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5757`
- K-Navi CZ: `https://p-kn.com/slot/1095/14045/`
- 旧パチマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/52/a.php`
- 旧パチマガ 1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/52/c.php`
- 旧パチマガ 機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/52/rodeo_slot_52.php`
- pacnk: `https://pacnk.com/slot/tools/sh_nekketukyousi.html`
- 5号機クロニクル ロデオ: `https://5goki.com/rodeo`
- 旧天井回顧: `https://macerate.seesaa.net/article/226312110.html`
- PachiBee 爆走列島: `https://www.pachibee.jp/machines/reach/209110014`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という直前進捗を維持。
- 新規本線収集を止めず、2006-10以降の最初のresetBehavior欠損機を後続QAで補完する。

## 次回再開地点

1. **recordCount 434 / chronologicalFrontier 2009-12-07**。
2. まず **2009-12-07同日群**を監査。repo未登録確認済みの `哲也 新宿VS上野`（アリストクラート）はK-Naviで2009-12-07ホール導入、天井・宵越アリ・RT/ART・周期CZ分類まで先行確認済み。次の有力候補。
3. 同日群には他のパチスロがないかPachiBee/P-WORLD/K-Navi/業界記事/メーカー一覧を突合して、同日内の取りこぼしを閉じてから12/08以降へ進む。
4. `爆走列島` は **2009-12-14** 導入として後続候補。11/16発表日を使わない。
5. 追加前に必ずrepo既存検索＋LATEST_HANDOFF再取得を行い、重複・他リレー競合を防ぐ。
6. 性能コア＋resetBehavior v0.7を同基準で収集。競合は平均せず `CONFLICT`、十分な再探索後のみ `UNVERIFIED_AFTER_RESEARCH`。
7. 完全再現用の細かな内部抽選は対象外。
