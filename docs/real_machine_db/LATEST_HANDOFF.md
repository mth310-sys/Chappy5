# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **648**
- latestMachineAdded: **フルメタル・パニック！TSR**（タイヨーエレック）
- latestRecord: `docs/real_machine_db/machines/2012-04-02_full-metal-panic-tsr.md`
- chronologicalFrontier: **2012-04-02**
- frontierLatestExactDateMachine: **フルメタル・パニック！TSR**
- schema: **resetBehavior v0.7**
- status: **2012-04-02_GROUP_OPEN__CONTINUE_SAME_DAY_AUDIT**

## 今回の同期・時系列監査

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコードを確認して開始。
- INDEXは旧地点19件のままなので、README規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時はrecordCount 647 / frontier 2012-03-26 / パチスロ「モンスターハンター」。
- 2012-03-26同日群を複数表記で再監査し、モンスターハンター以外の具体日付き未登録5号機を今回確認できなかったため03/26群を閉鎖。
- 次の04/02候補を監査。ニューアイムジャグラーEXは既登録、モンスターハンターは既存レコード内に03/26 vs HAZUSE 04/02のCONFLICTを保持済みのため重複登録しない。
- K-Naviで2012-04-02導入を確認したタイヨーエレック「フルメタル・パニック！TSR」を未登録確認し648件目に追加。
- 04/02同日群はまだ閉じていない。次回は同日候補をK-Navi/HAZUSE/P-WORLD/パチビー/当時業界記事で再監査してから次日へ進む。

## 今回の本線追加 — フルメタル・パニック！TSR

### 導入日・型式

- 時系列キー: **2012-04-02**。
- K-Navi: 2012-04-02ホール導入開始。
- P-WORLD: 2012年04月導入。
- formalModelName: **フルメタル・パニック！TSR M**。
- approvalNumber: **1S0797**。

### 性能コア

- systemType: **5号機 A+ART / ボーナス+ゲーム数上乗せART**。
- 機械割: **96.5 / 98.5 / 100.6 / 104.3 / 108.4 / 111.6%**。P-WORLDと5号機クロニクルで一致。
- BIG: **1/414.8 / 404.5 / 394.8 / 385.5 / 376.6 / 368.2**。
- REG: **1/574.9 / 555.4 / 537.2 / 520.1 / 504.1 / 489.1**。
- ボーナス合算: **1/240.9 / 234.1 / 227.6 / 221.4 / 215.6 / 210.1**。
- ボーナス+ART合算: **1/155.8 / 144.3 / 144.2 / 130.1 / 125.3 / 112.5**。
- 50枚ベース: **約32G**。
- ART「AS-MODE」: **1セット50G+α / 約+1.5枚/G**。
- BIG純増 **207枚**、REG純増 **50枚**。
- 通常天井: **ボーナス間1200G**。P-WORLDと当時天井狙い資料で1200Gを照合。ただし「ARTへ突入」対「天井状態へ移行」の表現差は平均・統合せずレコード内CONFLICTとして保持。

### resetBehavior v0.7

- K-Navi本機ページに**「朝イチはココに注目」**専用解析項目が存在することは確認。
- ただし当該本文URLは現環境でキャッシュ取得不能。機種名表記揺れ、型式名、メーカー名と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 高確 / モード / ガックン」を組み替え、P-WORLD、K-Navi、パチマガスロマガ、旧天井狙い資料、5号機回顧DBを横断したが具体処理を確定できず。
- 設定変更時の天井カウンタCLEAR/RETAIN、据え置き、単純電源OFF→ON、設定変更時の内部高確再抽選/引継ぎ、ガックン等は **UNVERIFIED_AFTER_RESEARCH**。
- 当時天井狙い資料自体も本機の宵越しを「？」としているため、設定変更時リセットを一般則から推測しない。
- 設定変更専用短縮天井・朝一ART確定・高確保証等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間は `NOT_APPLICABLE_5TH_GEN`。

## 時系列監査 / 次回再開地点

1. **recordCount 648 / chronologicalFrontier 2012-04-02**から開始。
2. **2012-04-02同日群を継続監査**する。既登録のニューアイムジャグラーEX、モンスターハンターを重複させず、その他の具体日付き未登録5号機がないかK-Navi/HAZUSE/P-WORLD/パチビー/当時業界記事を横断する。
3. 04/02群を閉じるまでは次日へ飛ばさない。
4. 次候補として見つかる機種は必ずrepo重複確認してから649件目候補とする。
5. 参考: オリンピア「ねぇ～ねぇ～島娘」はK-Naviで2012-04-23導入のため04/02群には含めない。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/モード/状態/ガックンを組み替えて再探索し、競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi フルメタル・パニック！TSR: `https://p-kn.com/slot/1598/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6656`
- パチマガスロマガ 小役確率/1000円ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/12/c.php`
- 5号機クロニクル タイヨーエレック: `https://5goki.com/yaiyoelec`
- 天井ハイエナ生活（当時系二次資料）: `https://macerate.seesaa.net/article/226312110.html`
- K-Navi ねぇ～ねぇ～島娘（次日監査用日付確認）: `https://p-kn.com/slot/1609/`

## GitHub commits

- フルメタル・パニック！TSR machine record: `db367cec5a56ab7b7b15431eb5a715edf51e7bd5`
