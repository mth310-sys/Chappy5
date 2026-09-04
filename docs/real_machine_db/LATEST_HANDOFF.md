# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **578**
- latestMachineAdded: **蝶々乱舞**（オリンピア / primary 2011-06-13、日付CONFLICTあり）
- latestRecord: `docs/real_machine_db/machines/2011-06-13_chocho-ranbu.md`
- chronologicalFrontier: **2011-06-13**
- frontierLatestExactDateMachine: **蝶々乱舞**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、577前線レコード「レッツドラゴーン」を再取得して開始。
- `INDEX.md` は19件地点の旧情報なので、README規約どおり最新 `LATEST_HANDOFF.md` とmachineレコードを進捗正本として使用。
- 2011-06-07〜06-19境界を監査し、repo未登録のオリンピア「蝶々乱舞」を確認して578件目として追加。
- 導入日は **K-Navi 2011-06-13ホール導入開始 / HAZUSE 2011-06-10導入開始 / 当時グリーンべると 2011-06-19納品開始予定**。平均せずCONFLICT/定義差を保持し、主releaseDateはホール導入を明示するK-Navi 2011-06-13とした。
- 2011-06-07〜06-12は今回確認した6月機種一覧・K-Navi/HAZUSE/当時業界記事の候補群から、これより早い具体日を持つ未登録機を確認できなかった。月単位の「レッツドラゴーン」は具体日を推測固定しない。

## 今回追加 — 578 蝶々乱舞

- メーカー: **オリンピア（平和グループ）**
- 型式名: **蝶々乱舞**
- 検定番号: **1S0080**
- 5号機 / **A+ART**
- PAYOUT: **96.9 / 98.5 / 100.1 / 104.1 / 108.1 / 112.2%**
- BIG: **1/434.0 / 1/422.8 / 1/412.2 / 1/385.5 / 1/362.1 / 1/341.3**
- REG: **1/532.8 / 1/520.1 / 1/504.1 / 1/485.5 / 1/468.1 / 1/445.8**
- ボーナス合算: **1/239.2 / 1/233.2 / 1/226.8 / 1/214.9 / 1/204.2 / 1/193.3**
- ART初当たり: **1/372.7 / 1/336.0 / 1/332.1 / 1/277.8 / 1/255.1 / 1/167.1**
- BIG純増 **204枚** / REG純増 **30枚**
- ART「乱舞チャンス」: **約+1.5枚/G、1セット33〜333G**
- 天井/状態変化: **661G以降REG→蝶々ゾーン / 957〜990G超高確 / 990G+前兆5GでART確定**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**

### resetBehavior v0.7 — 578

- K-Naviに本機専用 **「設定変更後の挙動」** と **「モード移行率(設定変更時)」** の解析項目が存在することを確認。
- P-WORLDで通常時に **3種類の内部状態**が存在し、**33G周期で移行抽選**されることを確認。
- ただし設定変更時の具体本文/モード振り分け数値、661/957/990G進捗のCLEAR/RETAIN、据え置き、単純電源OFF→ON、状態処理、ガックン等の変更判別は、表記・検索語・資料系統を変えて再探索しても安全に確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井、朝一特定G以内当選率等の比較可能な公開朝一数値も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE**。

## 主要出典 — 578（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1427/`
  - 2011-06-13ホール導入、設定別BIG/REG/合算/機械割、ART概要、設定変更/変更時モード移行解析項目の存在
- P-WORLD: `https://www.p-world.co.jp/machine/database/6357`
  - A+ART、BIG204枚/REG30枚、約+1.5枚/G、天井661/957/990G、通常時3内部状態・33G周期
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0080/`
  - 型式・検定番号1S0080、導入開始2011-06-10、ART構造
- グリーンべると: `https://web-greenbelt.jp/00002092/`
  - 2011-05-12当時記事、オリンピア製、ART33〜333G・約+1.5枚/G、納品6月19日開始予定
- 当時整理ブログ: `https://plaza.rakuten.co.jp/x3esibm1/`
  - 全設定BIG/REG/機械割/ART初当たり
- グリパチ攻略wiki: `https://guripachi.game-info.wiki/d/%C4%B3%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BD`
  - ART初当たり、天井値の後年照合

## 今回のGitHub更新

- 578: `docs/real_machine_db/machines/2011-06-13_chocho-ranbu.md`
  - create commit: `dee329cf9ac41bfaf80d651f98791b748c0d9868`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲は推測で動かさない。怪胴王直後の最初の実在resetBehavior欠損machine pathを直接確定してから再開する。

## 次回再開地点

1. **recordCount 578 / chronologicalFrontier 2011-06-13**。最新main README / mission / INDEX / LATEST_HANDOFF / 577・578レコードを再取得。
2. **2011-06-14〜06-19を最終監査**。蝶々乱舞の日付CONFLICTは保持し、根拠なく10日/13日/19日を統合しない。
3. 既知候補 **鬼浜外伝 ハヤト疾風伝**は当時グリーンべるとで **2011-06-19納品開始**。repo重複と他の06-14〜18機を先に確認し、最古未登録なら579件目候補。
4. 続いて **プロゴルファー猿**は必勝本 **2011-06-20導入** / K-Navi **2011-06-27ホール導入**で日付競合候補。**リオスパ Rioの大温泉**はK-Navi **2011-06-20**。途中機を飛ばさず時系列で処理する。
5. **ハネスロ林家一家 2011-06-26納品開始予定**、**スカイラブ3 2011-06-27ホール導入**も後続候補として保持。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・reset検索語を変え、公式/業界/当時解析/旧DB/アーカイブ/回顧資料を横断した後だけ残す。CONFLICTは平均しない。
