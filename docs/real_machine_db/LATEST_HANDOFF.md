# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **601**
- latestMachineAdded: **夢夢ワールドDXII**（SANKYO / 2011-09-05）
- latestRecord: `docs/real_machine_db/machines/2011-09-05_mumu-world-dx2.md`
- chronologicalFrontier: **2011-09-05**
- frontierLatestExactDateMachine: **夢夢ワールドDXII**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — 夢夢ワールドDXII

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前frontierレコード「探偵物語TURBO」を再取得して開始。
- INDEXは初期時点の19件表示で更新が古いため、README規定どおりより新しいLATEST_HANDOFFを優先。開始時正本は recordCount **600** / chronologicalFrontier **2011-09-05**。
- repo検索で「夢夢ワールドDXII」未登録を確認し601件目として追加。
- 導入日はK-Navi・HAZUSEで**2011-09-05**。SANKYO公式は2011.09、当時グリーンべるとは9月上旬納品予定で整合。
- 型式 **夢夢ワールドDXIIZ**、検定番号 **1S0513**。

### 性能コア

- 5号機 A+ART / 周期抽選・継続率ループ＋ゲーム数上乗せART。
- 機械割: **96.3 / 98.5 / 100.5 / 104.2 / 107.6 / 112.1%**。K-Navi・HAZUSE一致。
- BIG: **1/358 / 346 / 350 / 337 / 344 / 326**。
- REG: **1/799 / 712 / 780 / 689 / 762 / 655**。
- ボーナス合算: **1/247 / 233 / 241 / 226 / 237 / 217**。
- BONUS&ART合成: **1/162 / 148 / 146 / 130 / 126 / 109**。SANKYO公式/K-Naviで一致。
- ART単独初当り設定別は直接公開値を今回確定できず、合成値から逆算しない。
- 50枚ベース: **31.22 / 31.28 / 31.27 / 31.35 / 31.32 / 31.46G/1000円**。パチマガスロマガ直接値。
- BIG約**204枚**、REG約**48枚**。
- ART「DX TIME」: **40G＋α / 約+1.4枚/G**、継続率約**39 / 66 / 77 / 91%**。
- 天井: **ボーナス間1280G → 継続率77% or 91% ART**。

### resetBehavior v0.7

- 当時解析資料で**設定変更時は天井到達までのゲーム数をクリア**、**状態移行抽選を実施**、**ステージチェンジ発生**を直接確認。
- 単純な**電源OFF→ONだけでもステージチェンジ**が発生するため、ステージチェンジ単独では設定変更判別に使えない。
- `gameCounterReset = CLEAR_ON_SETTING_CHANGE`。
- `ceilingAfterReset = NORMAL_CEILING_RESTART / NO_SHORTENING_CONFIRMED`。前日天井進捗は消失し、設定変更専用短縮天井は再探索後も確認できず。
- `stateAfterReset = RESELECT_CONFIRMED_VALUE_UNVERIFIED`。状態移行抽選の具体振り分けは未確認。
- 据え置き時の天井/周期/状態引継ぎ、単純電断時のゲーム数・状態詳細、設定変更時モード振り分け、ガックン等は表記揺れ・型式・メーカー・朝一/据え置き/電源OFF ON/天井短縮/モード等へ検索語を変えた後も直接確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 朝一特定G以内当選率・リセット専用優遇率等の公開具体値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間は5号機のため **NOT_APPLICABLE**。

### CONFLICT

- REG実獲得目安はSANKYO公式系/P-WORLD/パチマガ/セブンピースが**約48枚**、HAZUSE演出ページが**平均60枚**。主値は複数一致の48枚、HAZUSE値を競合保持。
- ART継続率はSANKYO公式/業界記事/K-Navi/HAZUSEが最大**約91%**。P-WORLD同一ページの概要は91%だが詳細節に99%表記があり内部不整合。主値91%、99%表記はCONFLICT noteとして保持。

## 2011-09-05同日群の次候補

同日群はまだ未クローズ。次の強い未処理候補:

1. **マジカルスロット 魔法少女隊アルス**（藤商事）— パチビーで**2011-09-05導入**を確認。藤商事公式製品ページ現存、当時グリーンべるとは9月上旬納品予定。型式候補 `マホウショウジョタイアルスFSB` は後年実機資料で確認できるため、次回は公的/解析DBで型式・検定番号を追加照合する。

**次回最優先は「魔法少女隊アルス」のrepo重複確認**。未登録なら性能コア＋resetBehavior v0.7で602件目として処理。同日群を閉じた後、2011-09-06以降の最古未処理機を監査する。

## 主要出典 — 夢夢ワールドDXII（取得日 2026-09-04）

- SANKYOオンライン博物館（公式）: `https://www.sankyo-fever.jp/collection/541/`
- 当時グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/4771/greenbelt`
- K-Navi: `https://p-kn.com/slot/1463/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6435`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0513/`
- HAZUSE演出: `https://hazuse.com/machine/pachislot/1S0513/genre/202/`
- セブンピース（設定変更/電断挙動）: `https://www.mb.ccnw.ne.jp/seven-peace.com/mumu_world.html`
- パチマガスロマガ 基本仕様: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/25/a.php`
- パチマガスロマガ 1000円あたりゲーム数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/25/c.php`

## 次候補確認用出典 — 魔法少女隊アルス（取得日 2026-09-04）

- 藤商事公式: `https://www.fujimarukun.co.jp/products/alice/`
- パチビー（2011-09-05導入）: `https://www.pachibee.jp/machines/index/211070008`
- 当時グリーンべると: `https://news.p-world.co.jp/articles/4783/greenbelt`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/11/a.php`

## 遡及resetBehavior QA継続地点

- **小野真弓のかわいい日本昔話 (`2006-11_ono-mayumi-kawaii-nihon-mukashibanashi.md`) までresetBehavior v0.7補完済み**。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みで重複更新しない。
- tree実パス順で次の候補は **`docs/real_machine_db/machines/2006-11_rocky-balboa-g.md`**。直接fetchしてresetBehavior欠損有無を確認する。
- その後 `2006-11_thunder-v-special.md`（月のみ別path）の重複/別レコード性とresetBehavior有無を確認する。

## 本線の次回再開地点

1. **recordCount 601 / chronologicalFrontier 2011-09-05**から開始。
2. 未来少年コナン、探偵物語TURBO、夢夢ワールドDXIIを重複追加しない。
3. **2011-09-05同日群を継続監査**。最優先は「マジカルスロット 魔法少女隊アルス」のrepo重複確認。
4. 未登録なら性能コア＋resetBehavior v0.7で602件目として処理。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを組み替えて再探索する。
6. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。
