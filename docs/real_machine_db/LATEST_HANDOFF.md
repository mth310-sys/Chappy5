# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **793**
- latestMachineAddedByChronology: **パチスロ輪廻のラグランジェ**（Sammy / サミー）
- latestRecord: `docs/real_machine_db/machines/2014-02-03_rinne-no-lagrange.md`
- chronologicalFrontier: **2014-02-03**
- schema: **resetBehavior v0.7**
- status: **2014-02-03_GROUP_OPEN**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-01-27_basilisk-kizuna.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は **recordCount 792 / chronologicalFrontier 2014-01-27 / 01-27群CLOSED**。
- 前handoffどおり **2014-01-28～02-02** を境界監査。ALL7 2014年2月導入一覧と既存候補を照合し、今回この期間に具体日付き未登録パチスロを固定できなかったため `CLOSED_FOR_CURRENT_RESEARCH`。
- ALL7 2014年2月一覧の02-03パチスロ群は **「パチスロ輪廻のラグランジェ」「主役は銭形2」** を確認。
- **2014-02-03「パチスロ輪廻のラグランジェ」（Sammy）**を793件目として追加。02-03群はまだOPEN。

## 今回追加 — パチスロ輪廻のラグランジェ

### identity / 性能コア

- manufacturer: **Sammy / サミー**。
- modelName: **ラグランジェZR**。
- approvalNumber: **3S0984**。
- hall start: ALL7 / K-Navi / HAZUSE **2014-02-03**。グリーンべるとの2013-12-18発表も2月上旬納品予定として整合。
- generation/system: **5号機 / 差枚数管理型AT・擬似ボーナスAT**。
- payout: **97.4 / 98.6 / 101.2 / 105.1 / 110.3 / 115.6%**。精密系列97.44 / 98.56 / 101.19 / 105.05 / 110.34 / 115.63%は丸め整合として注記し平均化しない。
- LB: **1/298.2 / 290.1 / 275.6 / 248.0 / 223.9 / 197.3**。
- REG: **1/596.7 / 586.1 / 584.3 / 555.0 / 537.0 / 495.4**。
- AT/擬似ボーナス合算: **1/198.8 / 194.1 / 187.3 / 171.4 / 158.0 / 141.1**。
- baseGamesPer50: **約31G/50枚**（後年整理単一値のためANALYSIS_SINGLE）。
- netIncrease: **約2.5枚/G**。
- REG: **50枚**。LBはウォクスドライブで初期差枚数を決める可変型。
- ceiling: 通常モード **900/950/1000/1050/1100G**の段階天井、最大1100G。天国A/Bは**116G**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- 設定変更時は **モード・状態を再抽選**。
- 前日天井Gを単純に0へ戻すだけでなく、**内部開始G数（ハマリG数）を再抽選**する本機固有仕様を2014年当時記事で確認。
- 後年整理では **0G 25% / 変則G数75%**。変則時は100/10/1の位を個別抽選し、100の位は100G 84.4%、200G 12.5%、300G 1.6%、400G 1.2%、800G 0.4%。10の位は10G 50%、20G 25%、30G 12.5%、40G 6.3%、50G 6.3%。1の位0～9各10%。当時記事の「大半が110～140G」と整合。
- 設定変更時は専用の **設定変更モード**へ移行するとする解析を確認。ただし現存する詳細移行率表は画像中心で安全に数値抽出できず `EXACT_TABLE_UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時状態: 高確 **全設定12.5%**、超高確は設定1～3 **0.8%** / 設定4 **1.6%** / 設定5・6 **3.1%**。残り通常。
- 朝一に何も引かず夜背景（超高確）へ移行した場合は高設定期待が上がる判別材料。
- 純据え置き時の天井G・モード・状態の完全直接契約は、表記揺れ/型式/メーカーと据え置き・宵越し・朝一等を組み替えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ONについても電源OFF/ON・電断・据え置き等で再探索したが本機専用直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ガックンは実戦事例に判別材料としての言及があるが、高信頼な本機専用契約は固定できず `UNVERIFIED_FOR_GACKUN_CONTRACT`。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。

## conflicts / safeguards

- 「設定変更で天井Gリセット」という簡略表記と「内部開始G数再抽選」は矛盾させず、**前日進捗消失 + 新たな内部開始G数再抽選**として定義を分離。
- 「設定変更後500G」は攻略上の狙い目であり固定短縮天井500Gではない。
- 116Gは天国モード天井であり、設定変更後固定天井ではない。
- 通常時モード移行表を設定変更時の朝一モード値へ流用しない。

## 2014-01-28～02-02境界 — CLOSED_FOR_CURRENT_RESEARCH

- ALL7 2014年2月導入一覧と既存handoff候補を照合し、この期間に具体日付き未登録パチスロを今回固定できず。

## 2014-02-03同日群 — OPEN

処理済み:
- **パチスロ輪廻のラグランジェ**（Sammy） — 793件目。

未処理:
- **主役は銭形2**（オリンピア / ゴールドオリンピア） — ALL7 / HAZUSEで2014-02-03。

ALL7同日一覧にある「交響詩篇エウレカセブン～真の約束の地～」「氷川きよし2」「海物語アクア」「魔神英雄伝ワタル」等はパチンコ側掲載であり、本線へ混入させない。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線793件目を優先。既存性能coreStatusは変更なし。reset QAは性能完了判定とは別管理を維持。

## 次回再開地点

1. **recordCount 793 / chronologicalFrontier 2014-02-03 / 02-03群OPEN** から開始。
2. 次の未処理は **2014-02-03「主役は銭形2」（オリンピア / ゴールドオリンピア）**。
3. 「主役は銭形2」処理後、02-03同日群を全メーカー横断で再監査し、未登録パチスロがなければCLOSED。
4. その後 **2014-02-04～02-09** を境界監査し、先行候補 **2014-02-10「ヱヴァンゲリヲン 決意の刻」**へ進む。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。
6. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合は平均せずCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

### パチスロ輪廻のラグランジェ
- グリーンべると: `https://web-greenbelt.jp/00006859/`
- ALL7 2014年2月導入一覧: `https://www.all7.jp/plans/index/2014/02/10`
- K-Navi: `https://p-kn.com/slot/1989/`
- HAZUSE: `https://hazuse.com/machine/pachislot/3S0984/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7275`
- CrankySeven: `https://crankyseven.com/rinnenolagrange-pc.htm`
- みんスロ: `https://minslo.com/%E8%BC%AA%E5%BB%BB%E3%81%AE%E3%83%A9%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B8%E3%82%A7/`
- スロパチクエスト: `https://www.slopachi-quest.com/rinnenoraguranzye/`
- スロパチクエスト 天井: `https://www.slopachi-quest.com/article/reincarnation-lagrangian/`
- 必勝本 ボーナス概要: `https://p.hisshobon.jp/machine/2330/1/44210`
- 必勝本 狙いドコロ: `https://p.hisshobon.jp/machine/2330/1/46642`
- 完全告知 設定変更時状態: `https://kanzenkokuchi.jp/78/set.php`
- メタボ教授 2014-02-09設定変更解析: `https://metabopro.com/raguranjyetorimu/`
- 楽スロ 設定変更時内部開始G数: `https://rakuslo.com/blog-entry-237.html`
- 期待値見える化 モード: `https://slotjin.com/slot/rinnenolagrange-mode/`
- LackLuckLife 設定変更専用モード: `https://l-l-life.com/36851466/`
- ビデオマーケット パチスロ最強伝説G #602: `https://www.videomarket.jp/title/082220/A082220070999H01`

### 次候補
- HAZUSE 主役は銭形2: `https://hazuse.com/machine/pachislot/3S1017/`
