# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **435**
- latestMachineAdded: **哲也 ～雀聖と呼ばれた男～ 新宿VS上野編**
- latestRecord: `docs/real_machine_db/machines/2009-12-07_tetsuya-shinjuku-vs-ueno.md`
- chronologicalFrontier: **2009-12-07**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- GitHub最新mainの `README.md`、最新ミッション `CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、最新434 `2009-12-07_honoo-no-nekketsu-kyoushi.md` を再読。
- INDEXは旧19件地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋実レコードを優先。
- 開始時mainは434件 / chronologicalFrontier 2009-12-07。
- 直前handoffで同日未処理候補として指定されていた `哲也 新宿VS上野` をrepo検索し未登録を確認。
- K-Navi、当時グリーンべると、旧パチマガ、後年DB・実機資料・天井回顧を横断し、性能コア＋resetBehavior v0.7を収集。
- 追加直前にLATEST_HANDOFFを再取得して434件地点のままで競合がないことを確認し、435件目として追加。

## 435 — 哲也 ～雀聖と呼ばれた男～ 新宿VS上野編 要約

- メーカー: **アリストクラートテクノロジーズ**
- ホール導入開始: **2009-12-07**（K-Navi）
- 世代: **5号機**
- システム: **A+ART / 周期CZ / ストックART**
- BIG: **1/383.25 → 1/276.52**
- REG: **1/618.26 → 1/431.16**
- ボーナス合成: **1/236.59 → 1/168.47**
- 50枚ベース: **31.88 → 32.09G**
- ART「玄人TIME」: **約+1.1枚/G / 30G・100G・1000G**
- BIG約250枚 / REG最大約77枚

## CONFLICT — 機械割

平均せず両系列を保存。

- 旧パチマガシミュレート: **97.76 / 99.45 / 101.65 / 104.32 / 106.76 / 111.56%**
- 後年DB・実機系で広く流通: **97.3 / 98.8 / 100.9 / 104.2 / 107.0 / 112.1%**
- 単純な丸めでは一致しないため `CONFLICT`。

## 天井・CZ

- 通常**500G**で第1天井CZ。
- K-Naviには第2・第3天井CZの専用項目が存在。
- 回顧資料では第1天井後さらに通常500Gで第2、第2天井後さらに通常500Gで第3。第2はARTストック5個以上、第3は10個以上という記録がある。
- 当時実戦掲示板にも第1→第2→第3の500G周期到達例が残るため、補助照合に限定して保持。

## resetBehavior v0.7

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`。K-Naviに「朝イチは狙い目!?」「ガックン判別は可能!?」、旧パチマガに「攻め時・ヤメ時・設定変更時」専用項目の存在は確認したが本文具体値を回収できず。
- **据え置き**: `PARTIAL_CONFIRMED`。K-Naviが本機を明示的に **「宵越アリ」** と分類。据え置き時に宵越し狙いが成立することは確認。ただし第1〜第3天井進捗、ARTナビストック、CZ状態の保持範囲は未確定。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。天井進捗・CZ/ART・ナビストック・初期出目の復帰挙動を確定できず。
- **ゲーム数/天井**: 500G周期の天井CZ構造は確認。設定変更時clear/retainは未確定。
- **天井短縮**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **モード/状態**: 設定変更専用・朝一専用の公開振分は `NONE_CONFIRMED_AFTER_RESEARCH`、CZ/ART状態処理は未確定。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵/不利**: 専用朝一項目の存在までは確認したが具体本文未回収のため恩恵を推測せず `NONE_CONFIRMED_AFTER_RESEARCH`。不利要素も同様。
- **変更判別**: ガックン専用項目の存在は確認したが可否・条件を回収できず `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- K-Navi: `https://p-kn.com/slot/1083/`
- 当時グリーンべると/P-WORLDニュース: `https://news.p-world.co.jp/articles/3649/greenbelt`
- 旧パチマガ ボーナス/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/39/h.php`
- 旧パチマガ 1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/39/c.php`
- 旧パチマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/39/a.php`
- 旧パチマガ 機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/39/arist_slot_39.php`
- みんスロ: `https://minslo.com/%E5%93%B2%E4%B9%9F-%E6%96%B0%E5%AE%BFvs%E4%B8%8A%E9%87%8E/`
- 天井回顧: `https://kotuumai.exblog.jp/`
- P-WORLD掲示板: `https://www.p-world.co.jp/sp/search_kisyubbs.cgi?code=&group_id=3332&mode=thread_list&page=65`
- ホームスロット実機資料: `https://home-slot.net/SHOP/s-aristocrat9.html`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という直前進捗を維持。
- 新規本線収集を止めず、2006-10以降の最初のresetBehavior欠損機を後続QAで補完する。

## 次回再開地点

1. **recordCount 435 / chronologicalFrontier 2009-12-07**。
2. まず **2009-12-07同日群の残件監査**を継続。PachiBee / P-WORLD / K-Navi / 当時業界記事 / メーカー一覧を突合して、炎の熱血教師・哲也以外の未登録パチスロがないか閉じる。
3. 同日群を閉じたら **2009-12-08〜12-13境界監査**へ進む。
4. `爆走列島` はPachiBeeで **2009-12-14** ホール導入確認済みの後続候補。11/16発表日と混同しない。
5. 追加前に必ずrepo既存検索＋LATEST_HANDOFF再取得を行い、重複・他リレー競合を防ぐ。
6. 性能コア＋resetBehavior v0.7を同基準で収集。競合は平均せず `CONFLICT`、十分な再探索後のみ `UNVERIFIED_AFTER_RESEARCH`。
7. 完全再現用の細かな内部抽選は対象外。