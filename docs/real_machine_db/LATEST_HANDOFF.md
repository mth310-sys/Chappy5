# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **551**
- latestMachineAdded: **パチスロスーパー海物語IN沖縄30KD**（三洋物産 / 2011-02・具体日未確定）
- latestRecord: `docs/real_machine_db/machines/2011-02_pachislot-super-umi-monogatari-in-okinawa-30kd.md`
- chronologicalFrontier: **2011-02-07**
- frontierLatestExactDateMachine: **幕末維新龍馬烈伝**（DAXEL / 2011-02-07）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線549レコード `頑固一徹` を再取得して開始。
- 開始時正本は **recordCount 549 / chronologicalFrontier 2011-02-07**。
- 前HANDOFF最優先候補DAXEL `幕末維新龍馬烈伝` を性能コア+resetBehaviorまで再探索して保存しようとした際、同時進行の別リレーが先に同一パスをmainへ追加。競合上書きを避けて対象ファイルを再取得し、**550件目として既存正本を採用**。
- `幕末維新龍馬烈伝` は2011-02-07導入、機械割97.9〜112.2%、BIG/REG/BC、36.40G/50枚、ART約+1.4枚/G、ボーナス間999G+最大32G天井を収録済み。resetBehaviorでは**設定変更で999G天井進捗リセット**まで直接確認済み。
- 標準25Φ `パチスロスーパー海物語IN沖縄` もmainに既存（547件目）であることを対象パス再取得で確認。コード検索インデックスの遅延により一時未登録に見えたため、重複作成を回避した。
- 前HANDOFFで未確定だった30Φ別スペック `パチスロスーパー海物語IN沖縄30KD` を再探索。P-WORLDで独立30Φ機、pacnk/5号機クロニクルで**2011年2月導入**と別性能系列を確認。
- `30KD` / `IN沖縄-30` / `2011年2月7日` / `2月6日` / `導入日` / `三洋物産` 等で具体日を再探索したが、30KD固有のホール導入日は月粒度より細かく確定できず。日付を推定せず**2011-02月粒度**で551件目として追加。
- chronologicalFrontierは、具体日が確定している本線として **2011-02-07** を維持。30KDの月粒度レコードを理由に前後関係を捏造しない。

## 今回追加 — 550 幕末維新龍馬烈伝（同時進行リレー追加を正本採用）

- メーカー: **DAXEL**
- 導入: **2011-02-07**
- タイプ: **A+ART / 自力型BC / ナビストック式ART**
- 機械割: **97.9 / 98.9 / 100.4 / 105.6 / 108.4 / 112.2%**
- BIG: **1/390.1 → 1/327.7**
- REG: **1/399.6 → 1/496.5**
- BC: **1/168.9 → 1/101.2**
- baseGamesPer50: **36.40G**
- 開国RUSH: **約+1.4枚/G**
- 天井: **ボーナス間999G+α（最大32G）→ BC、以後約32G周期BC**
- reset: **設定変更で天井ゲーム数リセット確認**。据え置き詳細、単純電源OFF→ON、状態/ナビストック、変更判別は未確定。
- record: `docs/real_machine_db/machines/2011-02-07_bakumatsu-ishin-ryoma-retsuden.md`

## 今回追加 — 551 パチスロスーパー海物語IN沖縄30KD

- メーカー: **三洋物産**
- 導入: **2011-02（具体日UNVERIFIED_AFTER_RESEARCH）**
- タイプ: **5号機 / ノーマル / 完全告知 / 30Φ沖スロ / ART非搭載**
- 機械割: **96.7 / 98.1 / 99.4 / 102.0 / 104.4 / 108.4%**
- BIG: **1/306.2 / 299.3 / 295.2 / 287.4 / 278.9 / 266.4**
- REG: **1/574.9 / 560.1 / 546.1 / 496.5 / 452.0 / 404.5**
- BIG: **約336枚**
- REG: **104枚**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。30KD/IN沖縄-30/30Φ/50枚/1000円/ベース/コイン持ちで再探索後も直接値を確定できず。
- 標準25Φは97.5〜110.0%系列・別BIG/REG系列のため、CONFLICT平均化せず**別スペック**として分離。

### resetBehavior v0.7 — 30KD

- ART/AT/CZ非搭載のボーナス主体ノーマルで、主要な朝一持越し対象は確認されない。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits` / `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常天井G数、設定変更時の天井CLEAR/RETAIN、単純電源OFF→ON、ガックン/初期出目は、30KD固有資料として直接確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 標準25ΦのresetBehaviorを自動転記していない。

### 主要出典 — 551（取得日 2026-09-04）

- P-WORLD: `https://www.p-world.co.jp/machine/database/6276`
- pacnk 30KD: `https://pacnk.com/slot/tools/sh_supaumistoryinokinawa30ked.html`
- 5号機クロニクル 三洋一覧: `https://5goki.com/sanyo`
- PAPIMO機種一覧: `https://papimo.jp/installed/search_50/S/33`

## 今回のGitHub更新

- 550: 同時進行リレーが `docs/real_machine_db/machines/2011-02-07_bakumatsu-ishin-ryoma-retsuden.md` を追加済み。競合上書きせず正本採用。
- 551追加: `docs/real_machine_db/machines/2011-02_pachislot-super-umi-monogatari-in-okinawa-30kd.md`
- 551 machine record commit: `a4055e7c565483de3445a865a943cc01948f1a2f`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みであるため重複QA対象外。
- QA済み範囲は推測で動かさず、machine treeを日付/パス順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 551 / chronologicalFrontier 2011-02-07**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 550・551レコードを再取得。
2. **2011-02-07同日群を最終監査**。コード検索インデックス遅延が発生したため、候補名検索だけでなくmachine tree/対象パスの存在確認も併用して重複を防ぐ。
3. 30KDの具体日は引き続きQA候補だが、十分な再探索後も2011-02月粒度のみのため、日付確定まで本線時系列を止めない。より強い当時資料が出た場合のみreleaseDateを更新。
4. 2/7同日群が閉じたら **2011-02-08以降の最古未処理機**を導入カレンダー、業界記事、当時解析サイト、古いDBで境界監査して前進する。
5. `残機尽きるまで私は戦うS` は2011-03-06納品開始予定のため2月へ誤繰上げしない。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を変えて横断後のみ維持。競合は平均せずCONFLICT。
