# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **893**
- latestRecordAdded: **ヱヴァンゲリヲン・希望の槍**（ビスティ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-06-22_evangelion-kibou-no-yari.md`
- chronologicalFrontier: **2015-06-22**
- frontierLatestMachine: **ヱヴァンゲリヲン・希望の槍**
- frontierRecord: `docs/real_machine_db/machines/2015-06-22_evangelion-kibou-no-yari.md`
- schema: **resetBehavior v0.7**
- status: **2015-06-22_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.892 `2015-06-08_gun-x-sword.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **892件 / 2015-06-08 / GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2015-06-09～06-21境界を検索語・資料系統を変えて再監査し、全国実ホール導入日を具体日で固定できる未登録5号機を今回安全に確認できなかった。
- 06/15は店舗単位の新台入替・既存機増設等の痕跡が中心で、本DBの新規全国導入機としては採らなかった。
- 次の強い全国導入アンカー2015-06-22「ヱヴァンゲリヲン・希望の槍」をNo.893として追加した。

## No.893 — ヱヴァンゲリヲン・希望の槍

- record: `docs/real_machine_db/machines/2015-06-22_evangelion-kibou-no-yari.md`
- manufacturer: **ビスティ**
- releaseDate canonical: **2015-06-22**
- modelName: **ヱヴァンゲリヲン・希望の槍R**
- inspectionNumber: **5S0191**
- generation: **5号機 / 新試験適合機**
- systemType: **A+ART / ボーナス+ゲーム数上乗せART**

### 性能コア

- 機械割 canonical: **97.6 / 98.6 / 100.6 / 103.3 / 108.5 / 114.3%**。
- ART初当たり: **1/465.7 / 463.2 / 449.7 / 419.4 / 352.1 / 282.7**。
- ボーナス合算: **1/431.2 / 420.1 / 409.6 / 390.1 / 376.6 / 364.1**。
- 50枚ベース: **約34～35G/50枚**。
- ART「EVANGELION IMPACT」純増: **約1.5枚/G**。
- ART初期: **50～150G+α**。
- SUPER BIG: **約252枚**、BIG: **約203枚**。
- 通常第1天井: **ART間780G**、通常第2天井: **ART間1280G**。ボーナスではART間天井Gをリセットしない。

### resetBehavior v0.7

- 設定変更時はART間ハマりG数をRESET。
- 第1天井は **780G→100G**、第2天井は **1280G→600G** へ短縮。
- 設定変更時内部状態は **通常B 25% / 高確75%**。
- 据え置き時はART間ハマりG数と内部状態を引き継ぐ。
- 純電源ON/OFFのみでは **前日の内部状態を引き継ぐ** という本機固有解析を確認。ただし純電断時のART間G数を独立明記した十分な資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 第1リセット天井100Gでは **50%でCZorART**、必勝本では設定6のみ **56.3%**。
- ガックンによる簡単なリセット判別は不可。高確挙動、100G仮天井、600G本天井を利用した事後/挙動判別が中心。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflicts / definition control

- 機械割に0.1ptの資料差あり。
  - 当時解析複数一致 + 業界上下限: **100.6% / 114.3%**（設定3/6）。
  - 一部後年資料: **100.7% / 114.4%**。
  - `CONFLICT_MINOR_ROUNDING_OR_SIMULATION_SETTING3_100_6_VS_100_7_SETTING6_114_3_VS_114_4` とし平均化しない。
- 全国ホール導入 **2015-06-22** とグリーンべるとの「6月下旬納品開始予定」は別イベントとして保持。
- ART間天井とボーナス間天井を混同しない。
- 設定変更・据え置き・純電断を自動同義扱いしない。

## 2015-06-09～06-21境界監査

- 検索対象: 2015/06/09～06/21、6/15入替、当時新台一覧、メーカー/解析DB、店舗入替記録等。
- 06/15の検索では既存機「パチスロ交響詩篇エウレカセブン2」等の店舗単位導入/増設記録が出たが、全国初導入とは扱わない。
- 今回、具体的な全国ホール初導入日をこの境界内に固定できる未登録5号機は確認できなかった。
- よって **2015-06-09_TO_2015-06-21_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。

## 2015-06-22群監査 — OPEN

処理済み:
1. **ヱヴァンゲリヲン・希望の槍** — ビスティ — No.893。

注意:
- P-WORLDの「猛虎花形」はページ最終更新日が2015-06-22だが、K-Naviで同機の実ホール導入日は **2013-10-21** と確認できるため、2015-06-22新規導入機には混入させない。
- 06/22群はまだ全メーカー横断の最終監査前なのでOPENを維持する。

## 次回再開地点

1. **recordCount 893 / chronologicalFrontier 2015-06-22 / GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.893を再確認。
3. **2015-06-22同日群を全メーカー横断で最終監査**し、具体日付き未登録5号機があれば最古/同日順で処理する。
4. P-WORLD等のページ更新日を導入日と誤認しない。検定告示 / 発表 / 納品予定 / テスト導入 / 全国実ホール導入を分離する。
5. 06/22群に追加がなければ `2015-06-22_GROUP_CLOSED_FOR_CURRENT_RESEARCH` とし、06/23以降の境界を監査して次の全国導入アンカーへ前進する。
6. `UNVERIFIED_AFTER_RESEARCH` は表記揺れ・正式型式名・メーカー・シリーズ名とreset関連検索語を変え、公式・業界記事・当時解析・古いDB・アーカイブ/回顧資料を横断した後だけ使用。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 同名/近似名・後継機のresetBehaviorを流用しない。
- 通常モード移行率とreset専用振り分けを分離する。
- 競合資料は平均・恣意的統合せずCONFLICT/制約として保持。
- P-WORLDの最終更新日を導入日として採用しない。

## 主要出典 — 取得日 2026-09-07

### ヱヴァンゲリヲン・希望の槍
- HAZUSE: https://hazuse.com/en/machine/pachislot/5S0191/
- K-Navi: https://p-kn.com/slot/2286/
- グリーンべると: https://web-greenbelt.jp/00007830/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/27/a.php
- パチ&スロ必勝本 通常/CZ: https://p.hisshobon.jp/machine/2574/1/52500
- パチ&スロ必勝本 ART: https://p.hisshobon.jp/machine/2574/1/52502
- すろぱちくえすと: https://www.slopachi-quest.com/kisyubetsu/%E3%82%A8%E3%83%B4%E3%82%A1%E5%B8%8C%E6%9C%9B/
- すろぱちくえすと リセット判別: https://www.slopachi-quest.com/article/%E3%82%A8%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B2%E3%83%AA%E3%82%AA%E3%83%B3%E5%B8%8C%E6%9C%9B%E3%81%AE%E6%A7%8D-%E8%A8%AD%E5%AE%9A%E5%A4%89%E6%9B%B4%E3%83%BB%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88%E5%88%A4/
- pacnk: https://pacnk.com/slot/2015/eva10/top.php
- 後年回顧: https://www.tettunn.com/entry/2018-04-30-230924

### 境界/誤混入防止
- 猛虎花形 K-Navi: https://p-kn.com/slot/1935/ （実導入2013-10-21）
- 猛虎花形 P-WORLD: https://www.p-world.co.jp/machine/database/7190 （最終更新2015-06-22。導入日ではない）
