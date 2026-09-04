# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **600**
- latestMachineAdded: **探偵物語TURBO**（オリンピア / 2011-09-05）
- latestRecord: `docs/real_machine_db/machines/2011-09-05_detective-story-turbo.md`
- chronologicalFrontier: **2011-09-05**
- frontierLatestExactDateMachine: **探偵物語TURBO**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — 探偵物語TURBO

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前frontierレコード「未来少年コナン」を再取得して開始。
- 開始時正本は recordCount **599** / chronologicalFrontier **2011-09-05**。
- repo検索で「探偵物語TURBO」未登録を確認し600件目として追加。
- 導入時期は、当時グリーンべると/P-WORLD業界ニュースが**2011-09-04納品開始予定**、パチビー/DMMぱちタウンが**2011-09-05ホール導入開始**。定義を分け、時系列キーはホール導入日の09-05。
- オリンピア公式2011年製品一覧でも本機存在を確認。

### 性能コア

- 5号機 A+ART / ゲーム数管理ART / 継続率自力加算。
- 機械割: **97.7 / 99.3 / 101.1 / 104.4 / 109.0 / 113.2%**。
- ボーナス合算: **1/199.8 / 196.8 / 193.3 / 188.3 / 180.0 / 172.5**。
- ART初当り: **1/378.6 / 355.9 / 346.1 / 311.7 / 295.8 / 274.8**。
- BIG: **1/445.8 → 1/354.2**、REG: **1/642.5 → 1/565.0**、工藤ミッション: **全設定1/829.6**。
- 50枚ベース: **34.94G/1000円（全設定共通）**。パチマガスロマガで直接確認。
- BIG約**204枚**、REG約**48枚**、工藤ミッション約**18枚**。
- ART「工藤チャンス」: **32G / 約+1.4枚/G**。上位「工藤チャンスTURBO」も同基本性能。
- 最深天井: **ART間1280G**。内部モードは**6種類**、レア役/ボーナスで規定ゲーム数短縮抽選あり。

### resetBehavior v0.7

- K-Naviに本機専用 **「設定変更後の挙動」**、パチマガスロマガに **「朝イチ・設定変更」** 解析項目が現存することを確認。
- ただし検索結果/現取得経路では具体本文値を安全に回収できず、設定変更時のART間規定G数CLEAR/RETAIN、内部6モード再抽選/引継ぎ、状態移行を確定できなかった。
- 「探偵物語TURBO / 探偵物語 TURBO / オリンピア」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 規定ゲーム数 / モード / ガックン」を組み替えて再探索した後のみ **UNVERIFIED_AFTER_RESEARCH** とした。
- 据え置き、単純電源OFF→ON、ガックン/初期出目等の変更判別も本機固有の直接根拠を確定できず。
- 設定変更専用短縮天井、朝一特定G以内ART優遇、設定変更専用モード振り分けの具体公開値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間は5号機のため **NOT_APPLICABLE**。

## 2011-09-05同日群の次候補

同日群はまだ未クローズ。前回調査で以下を2011-09-05候補として確認済み。

1. **夢夢ワールドDXII / 夢夢ワールドDX2**（SANKYO）— K-Navi/HAZUSE 2011-09-05。型式 `夢夢ワールドDXIIZ`、検定番号 `1S0513`。
2. **魔法少女隊アルス**（藤商事）— パチビー 2011-09-05。

**次回最優先は「夢夢ワールドDXII」のrepo重複確認**。未登録なら性能コア＋resetBehavior v0.7で601件目として処理。登録済みなら「魔法少女隊アルス」へ進む。同日群を閉じた後、2011-09-06以降の最古未処理機を監査する。

## 主要出典 — 探偵物語TURBO（取得日 2026-09-04）

- オリンピア公式2011年発売機種一覧: `https://www.olympia.co.jp/official/products/2011.html`
- 当時グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/4777/greenbelt`
- グリーンべると現行アーカイブ: `https://web-greenbelt.jp/00002179/`
- 娯楽産業: `https://www.goraku-sangyo.com/%E5%B9%B3%E5%92%8C%E3%80%80%E3%83%91%E3%83%81%E3%83%B3%E3%82%B3%EF%BC%86%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD2%E6%A9%9F%E7%A8%AE%E5%90%8C%E6%99%82%E7%99%BA%E8%A1%A8/`
- パチビー: `https://www.pachibee.jp/machines/index/211070004`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6439`
- K-Navi: `https://p-kn.com/slot/1472/`
- パチマガスロマガ 基本仕様: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/98/a.php`
- パチマガスロマガ 1000円あたりゲーム数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/98/c.php`
- パチマガスロマガ 総合: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/98/olympia_slot_98.php`
- DMMぱちタウン: `https://p-town.dmm.com/machines/1379`

## 遡及resetBehavior QA継続地点

- **小野真弓のかわいい日本昔話 (`2006-11_ono-mayumi-kawaii-nihon-mukashibanashi.md`) までresetBehavior v0.7補完済み**。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みで重複更新しない。
- tree実パス順で次の候補は **`docs/real_machine_db/machines/2006-11_rocky-balboa-g.md`**。直接fetchしてresetBehavior欠損有無を確認する。
- その後 `2006-11_thunder-v-special.md`（月のみ別path）の重複/別レコード性とresetBehavior有無を確認する。

## 本線の次回再開地点

1. **recordCount 600 / chronologicalFrontier 2011-09-05**から開始。
2. 未来少年コナン、探偵物語TURBOを重複追加しない。
3. **2011-09-05同日群を継続監査**。最優先は「夢夢ワールドDXII / 夢夢ワールドDX2」のrepo重複確認。
4. 未登録なら性能コア＋resetBehavior v0.7で601件目として処理。登録済みなら「魔法少女隊アルス」へ進む。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを組み替えて再探索する。
6. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。
