# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **599**
- latestMachineAdded: **未来少年コナン**（ニューギン / 時系列キー2011-09-05 / CONFLICT_DATE）
- latestRecord: `docs/real_machine_db/machines/2011-09-05_future-boy-conan.md`
- chronologicalFrontier: **2011-09-05**
- frontierLatestExactDateMachine: **未来少年コナン**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — 未来少年コナン

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前frontierレコードを再取得して開始。
- 開始時正本は recordCount **598** / chronologicalFrontier **2011-08-22**「パチスロ銀と金」。
- HAZUSE 2011年8月カレンダーは08-22で終了。09-02掲載はパチンコ「CR聖闘士星矢-青銅-」で、パチスロ本線の次候補ではないことを確認。
- repo検索で本機未登録を確認。
- 前回保留していた導入日競合を再監査し、K-Navi 2011-08-16に対し、当時グリーンべると・HAZUSE・パチビーは2011-09-05、P-WORLDも2011年9月表記。競合を平均せず保持し、複数一致＋当時業界記事を重視して2011-09-05を時系列キーとして599件目に追加。
- 型式名 **未来少年コナンV**、検定番号 **1S0277** をHAZUSE/P-WORLDで確認。

### 性能コア

- 5号機 A+ART / ゲーム数上乗せ / ステップアップART。
- 機械割: **96.1 / 98.7 / 100.4 / 104.3 / 107.3 / 111.3%**。
- ボーナス合算: **1/224.4 / 219.9 / 215.6 / 211.4 / 207.4 / 202.3**。
- ART初当り: **1/696.0 / 457.3 / 623.1 / 378.7 / 530.5 / 305.9**。
- 50枚ベース（パチマガスロマガ）: **33.97 / 34.05 / 34.12 / 34.19 / 34.27 / 34.34G/1000円**。当時業界記事の約34Gと整合。
- BIG約**207枚**、REG約**48枚**。
- ART「ギガントモード」: **約+1.5枚/G、初回30/50/100G**。
- 上位「ギガント大炎上モード」、超高確率上乗せ「太陽エネルギーチャンス」1セット10G、1回最大300G上乗せ。
- 通常天井: **ボーナス間999G消化以降に成立したボーナス終了後ART確定**。P-WORLD/パチビーは恩恵を**50G or 300Gのギガントモード**と記載。

### resetBehavior v0.7

- K-Naviに本機専用 **「設定変更後の挙動」** 解析項目が現存。
- ただし本文URL `https://p-kn.com/slot/1466/33185/` は今回の取得経路でcache missとなり、設定変更時の具体的な天井CLEAR/RETAIN・内部状態振り分けを安全に回収できなかった。
- 表記揺れと「設定変更/リセット/朝一/据え置き/電源OFF ON/宵越し/天井/高確/ガックン」を組み替えて再探索したが、据え置き・単純電断・変更判別の直接根拠も確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井、朝一ART優遇、朝一特定G以内当選率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間は5号機のため **NOT_APPLICABLE**。

## 日付競合

- **未来少年コナン**
  - K-Navi: **2011-08-16** ホール導入開始
  - 当時グリーンべると: **2011-09-05** 納品開始予定
  - HAZUSE: **2011-09-05** 導入開始
  - パチビー: **2011-09-05** 導入日
  - P-WORLD: **2011年09月**
- 平均せず `CONFLICT_DATE`。DB時系列キーは2011-09-05。

## 2011-09-05同日群の次候補

外部検索で少なくとも以下を2011-09-05導入機として確認済み。次回はrepo重複を突合し、未登録の最古候補から処理する。

1. **探偵物語TURBO**（オリンピア）— パチビー 2011-09-05。
2. **夢夢ワールドDXII / 夢夢ワールドDX2**（SANKYO）— K-Navi/HAZUSE 2011-09-05。型式 `夢夢ワールドDXIIZ`、検定番号 `1S0513`。
3. **魔法少女隊アルス**（藤商事）— パチビー 2011-09-05。

同日群は未クローズ。**次回最優先は「探偵物語TURBO」のrepo重複確認**。登録済みなら夢夢ワールドDXII、次いで魔法少女隊アルスへ進む。

## 主要出典 — 未来少年コナン（取得日 2026-09-04）

- 当時グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/4779/greenbelt`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6443`
- パチビー: `https://www.pachibee.jp/machines/index/211070003`
- K-Navi: `https://p-kn.com/slot/1466/`
- K-Navi 設定変更後本文URL（cache miss）: `https://p-kn.com/slot/1466/33185/`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0277/`
- パチマガスロマガ 1000円あたりゲーム数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/19/c.php`
- パチマガスロマガ 基本仕様: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/19/a.php`
- 後年設定判別DB: `https://pacnk.com/slot/tools/sh_konan.html`

## 遡及resetBehavior QA継続地点

- **小野真弓のかわいい日本昔話 (`2006-11_ono-mayumi-kawaii-nihon-mukashibanashi.md`) までresetBehavior v0.7補完済み**。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みで重複更新しない。
- tree実パス順で次の候補は **`docs/real_machine_db/machines/2006-11_rocky-balboa-g.md`**。直接fetchしてresetBehavior欠損有無を確認する。
- その後 `2006-11_thunder-v-special.md`（月のみ別path）の重複/別レコード性とresetBehavior有無を確認する。

## 本線の次回再開地点

1. **recordCount 599 / chronologicalFrontier 2011-09-05**から開始。
2. 未来少年コナンを重複追加しない。
3. **2011-09-05同日群を継続監査**。最優先は「探偵物語TURBO」のrepo重複確認。
4. 未登録なら性能コア＋resetBehavior v0.7で600件目として処理。登録済みなら「夢夢ワールドDXII」→「魔法少女隊アルス」の順に突合。
5. PARTIAL/UNVERIFIEDは機種名表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを組み替えて再探索する。
6. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。
