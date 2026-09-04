# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **598**
- latestMachineAdded: **パチスロ銀と金**（タイヨーエレック / 2011-08-22）
- latestRecord: `docs/real_machine_db/machines/2011-08-22_gin-to-kin.md`
- chronologicalFrontier: **2011-08-22**
- frontierLatestExactDateMachine: **パチスロ銀と金**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — パチスロ銀と金

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前frontierレコードを再取得して開始。
- 開始時正本は recordCount **597** / chronologicalFrontier **2011-08-08**「ミリオンゴッド～神々の系譜～」。
- 08-08同日群〜08-21境界を監査し、repo内重複検索で本機未登録を確認。
- K-Navi / パチビーとも **2011-08-22導入開始**で一致したため598件目として追加。
- 型式名は後年整理資料で **銀と金 M**。検定番号は今回未確定のため推測せずUNVERIFIED。

### 性能コア

- 5号機 A+ART / ゲーム数上乗せ。
- 機械割: **96.5 / 99.5 / 101.4 / 103.6 / 107.8 / 110.8%**。
- ボーナス合算: **1/249.2 / 241.8 / 234.9 / 226.8 / 220.7 / 212.1**。
- 同色BIG / 異色BIG / REGの設定別詳細値も機種レコードへ保存。
- 50枚ベース: **32.54〜32.63G/1000円**、平均表示約32.6G。
- 欲BONUS約**220枚**、絶BONUS約**60枚**。
- ART「愉悦の刻」: **1セット50G以上 / 約+1.4枚/G**。
- ART終了後10G「ざわざわZONE」、引き戻し率約20%。
- 通常天井: **ボーナス間1200Gで天井状態**。その後レア小役またはボーナス成立でART突入。
- ART初当たり設定別はK-Navi解析項目の存在までは確認したが本文数値を安全に回収できず、後継「銀と金2」の値を混入せずUNVERIFIED_AFTER_RESEARCH。

### resetBehavior v0.7

- K-Naviに本機専用 **「設定変更後の天井ゲーム数」** 解析項目が現存することを確認。
- ただし具体本文を今回の取得経路で回収できず、通常天井1200Gに対する設定変更後のCLEAR/RETAIN・短縮値を推測しない。
- 旧天井狙い資料に **「宵越し×」** の記録があるため前日進捗利用不可を示唆するが、単一二次根拠のため `UNVERIFIED_AFTER_RESEARCH_WITH_SECONDARY_NO_CARRYOVER_INDICATION` として保存。
- 据え置き時の天井/内部状態/ART関連状態、単純電源OFF→ON、設定変更時モード/状態、ガックン等の変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の朝一短縮天井・朝一特定G以内当選率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間は5号機のため **NOT_APPLICABLE**。

## 2011-08境界監査メモ

- **未来少年コナン**は導入日が競合。
  - K-Navi: **2011-08-16**
  - 当時グリーンべると: **2011-09-05から納品開始予定**
  - HAZUSE: **2011-09-05導入開始**
  - P-WORLDも2011年9月導入表記。
- 8月16日を本線日付として先行採用せず、**CONFLICT_DATE**として9月5日到達時に正式レコード化候補として再照合する。
- 型式名はHAZUSEで **未来少年コナンV**、検定番号 **1S0277** まで先行確認済み。

## 主要出典 — パチスロ銀と金（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1455/`
- パチビー: `https://www.pachibee.jp/machines/index/211060007`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6411`
- パチマガスロマガ 基本仕様: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/10/a.php`
- パチマガスロマガ 1000円あたりゲーム数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/10/c-1.php`
- 後年整理資料（型式名）: `https://pachinko.hatenablog.jp/entry/2011/08/gin-to-kin`
- 旧天井狙い資料（宵越し可否補助）: `https://macerate.seesaa.net/article/226196713.html`

## 遡及resetBehavior QA継続地点

- **小野真弓のかわいい日本昔話 (`2006-11_ono-mayumi-kawaii-nihon-mukashibanashi.md`) までresetBehavior v0.7補完済み**。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みで重複更新しない。
- tree実パス順で次の候補は **`docs/real_machine_db/machines/2006-11_rocky-balboa-g.md`**。直接fetchしてresetBehavior欠損有無を確認する。
- その後 `2006-11_thunder-v-special.md`（月のみ別path）の重複/別レコード性とresetBehavior有無を確認する。

## 本線の次回再開地点

1. **recordCount 598 / chronologicalFrontier 2011-08-22**から開始。
2. **2011-08-22同日群を最終監査**し、パチスロ銀と金を重複追加しない。
3. 08-23以降の境界を外部導入カレンダー/当時業界記事/K-Navi/HAZUSE/P-WORLDで確認し、最古未登録機を優先。
4. 「未来少年コナン」は08-16説を理由に遡及固定せず、09-05到達時にCONFLICT_DATEを保持した上で登録判断する。
5. PARTIAL/UNVERIFIEDは機種名表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを組み替えて再探索する。
6. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。
