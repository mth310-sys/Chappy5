# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **895**
- latestRecordAdded: **パチスロ バイオハザード6**（エンターライズ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-07-06_biohazard6.md`
- chronologicalFrontier: **2015-07-06**
- frontierLatestMachine: **パチスロ バイオハザード6**
- frontierRecord: `docs/real_machine_db/machines/2015-07-06_biohazard6.md`
- schema: **resetBehavior v0.7**
- status: **2015-07-06_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.894 `2015-06-22_oshijun-kerorun.md` を再読。
- INDEXは19件時点の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **894件 / 2015-06-22 / GROUP_OPEN**。

## 2015-06-22群監査 — CLOSED

処理済み:
1. **ヱヴァンゲリヲン・希望の槍** — ビスティ — No.893。
2. **押し順ケロルン** — 山佐 — No.894。

最終監査:
- 2015年導入一覧・K-Navi・メーカー/解析資料系統を再照合し、06/22の具体日付き未登録5号機を追加固定できなかった。
- `猛虎花形`はP-WORLDのページ更新日が2015-06-22だが、HAZUSE等で全国導入 **2013-10-21** を確認できるため2015年群へ混入させない。
- よって **2015-06-22_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

## 2015-06-23〜07-05境界監査 — CLOSED

- 06/29等を含め全国初導入候補を再探索したが、06/22の次の強い全国一斉導入アンカーは **2015-07-06**。
- K-Navi 2015年7月導入カレンダーでは07/06のパチスロとして **パチスロバイオハザード6** と **マイジャグラーIII** を掲載。
- よって **2015-06-23_TO_2015-07-05_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。

## No.895 — パチスロ バイオハザード6

- record: `docs/real_machine_db/machines/2015-07-06_biohazard6.md`
- manufacturer: **エンターライズ**
- releaseDate canonical: **2015-07-06**
- generation: **5号機（新基準ART）**
- systemType: **A+ART / ゲーム数上乗せ型ART**
- formal modelName: **バイオハザード6ZY**（二次資料、低めの信頼度）
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**

### 性能コア

- canonical機械割（当時必勝本・パチマガスロマガ一致）: **97.58 / 98.77 / 99.98 / 103.12 / 107.15 / 113.49%**。
- alternate機械割系列: **97.5 / 98.8 / 99.9 / 103.1 / 107.2 / 114.5%**。設定6は丸めでない差なので平均せずCONFLICT。
- ART初当たり: **1/336.1 / 319.4 / 302.1 / 262.3 / 217.5 / 181.3**。
- 設定5のみ後年DBに **1/216.5** がありCONFLICTとして別保持。
- 実ボーナス: **全設定1/1024.00**。
- ボーナス+ART合算: **1/288.7 / 276.3 / 263.3 / 232.5 / 195.8 / 166.6**。
- 50枚ベース: **約40.4G/50枚**。
- ART「ハザードラッシュ」: **50G+α / 純増約2.3枚/G**。
- エイダボーナス / エクストラボーナス: **150枚**。
- ART間天井: **999G**。実ボーナスを挟んでもART間天井は継続。

### resetBehavior v0.7

- 設定変更時: **ART間天井Gリセット / モード再抽選（天国優遇） / 内部状態再抽選 / カタコンベ開始**。
- resetモード振り分け:
  - 設定1-2: 通常B81.05% / 通常C6.25% / 天国12.50% / 超天国0.20%
  - 設定3-4: 73.55% / 6.25% / 20.00% / 0.20%
  - 設定5-6: 68.55% / 6.25% / 25.00% / 0.20%
- 天国モード天井: **99G+前兆**。固定一律の短縮天井ではなく、resetモード再抽選による早期当選契約として分離。
- reset時内部状態の明示行:
  - 設定1行: MID62.5% / HI25.0% / SP12.5%
  - 設定4行: MID50.0% / HI25.0% / SP25.0%
  - 元資料の空欄セルを勝手に設定2/3/5/6へ補完しない。
- 据え置き判別: ベルこぼし目より前に「一見ハズレ目に見えるリプレイ」が出れば **据え置き確定** とする当時解析あり。
- ガックンは据え置きでも起き得るとされ、変更確定材料にはしない。
- 据え置き時のART間G・モード・状態それぞれの完全な明示CARRY_OVER契約、および純電源OFF→ONだけの本機固有契約は再探索後も安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflicts / definition control

- `CONFLICT_PAYOUT_SERIES`: 当時必勝本/パチマガ系列と114.5%系の別系列を平均しない。
- `CONFLICT_ART_INITIAL_SETTING5_1_217_5_VS_1_216_5`: 設定5ART初当たりのみ競合。
- 型式名 `バイオハザード6ZY` は二次資料値。公的検定資料未固定のため検定番号を推測しない。
- reset時状態表のHTML空欄をペア値と断定して埋めない。

## 2015-07-06群監査 — OPEN

処理済み:
1. **パチスロ バイオハザード6** — エンターライズ — No.895。

未処理の強い同日候補:
2. **マイジャグラーIII** — 北電子 — K-Navi 2015年7月導入カレンダーで2015-07-06全国一斉導入枠を確認。

07/06群は同日未処理機が確定しているため **OPENを維持**。

## 次回再開地点

1. **recordCount 895 / chronologicalFrontier 2015-07-06 / GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.895を再確認。
3. 次の未処理機種 **「マイジャグラーIII」（北電子、2015-07-06）** を性能コア + resetBehavior v0.7で収集・登録する。
4. その後07/06同日群を全メーカー横断で最終監査し、漏れがなければ `2015-07-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。
5. 続いて07/07以降の境界監査へ進む。K-Navi上の次アンカーは2015-07-13 **鬼神7** だが、他資料も横断して先行導入・漏れがないか確認する。
6. `UNVERIFIED_AFTER_RESEARCH` は表記揺れ・正式型式名・メーカー・シリーズ名とreset関連検索語を変え、公式・業界記事・当時解析・古いDB・アーカイブ/回顧資料を横断した後だけ使用。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 同名/近似名・前作/後継機のresetBehaviorを流用しない。
- 通常モード移行率とreset専用振り分けを分離する。
- 競合資料は平均・恣意的統合せずCONFLICT/制約として保持。
- P-WORLDの最終更新日を導入日として採用しない。
- 検定告示 / 発表 / 納品予定 / テスト導入 / 全国実ホール導入を分離する。

## 主要出典 — 取得日 2026-09-07

### 境界 / 導入日
- K-Navi 2015年7月導入カレンダー: https://p-kn.com/calendar/201507/
- K-Navi バイオハザード6: https://p-kn.com/slot/2283/
- HAZUSE 猛虎花形（2013-10-21導入確認）: https://hazuse.com/machine/pachislot/3S0448/

### パチスロ バイオハザード6
- エンターライズ公式: https://www.enterrise.co.jp/slot/bh6/
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/2577/1/52955
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/10/a.php
- パチマガスロマガ スペック: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/10/h-2.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7754
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/9162/
- すろぱちくえすと リセット: https://www.slopachi-quest.com/article/%E3%83%90%E3%82%A4%E3%82%AA%E3%83%8F%E3%82%B6%E3%83%BC%E3%83%896-%E3%83%AA%E3%82%BB%E3%83%83%E3%83%88/
- あたり7: https://www.atari7.com/slot/date1433391975.php
- pacnk: https://pacnk.com/slot/tools/sh_biohazard6.html
- パチ7 ボーナス: https://pachiseven.jp/machines/4523/cutout/7
- 型式名二次資料: https://pachinko.hatenablog.jp/entry/2015/07/bio-hazard-6
