# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **772**
- latestMachineAddedByChronology: **パチスロ ラブ嬢**（オリンピア）
- latestRecord: `docs/real_machine_db/machines/2013-10-21_pachislo-lovejo.md`
- chronologicalFrontier: **2013-10-21**
- frontierLatestExactDateMachine: **パチスロ ラブ嬢**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-10-21_GROUP__NEXT_BOUNDARY_AUDIT_2013-10-22_TO_2013-11-04__KNOWN_2013-11-05_ANCHOR_EUREKA_SEVEN_2**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-10-21_mouko-hanagata.md` を再読してから継続。
- INDEXは旧集約状態（19件表記）のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を正とした。
- 作業開始時の最新正本は **recordCount 771 / chronologicalFrontier 2013-10-21 / 10-21群OPEN**。旧チャット地点ではなくmainを採用。
- 前handoff最優先候補 **「パチスロ ラブ嬢」** の既存レコード不在をmainで確認し、772件目として新規登録。
- 2013-10-21群をHAZUSE / K-Navi / 当時業界記事 / 一般検索で再監査。今回確認できた確定日付き本線候補は **猛虎花形 / パチスロ ラブ嬢**で、双方登録済みのため同日群をCLOSED。

## 今回追加 — パチスロ ラブ嬢

### identity / 性能コア

- manufacturer: **オリンピア / OLYMPIA**。
- modelName: **パチスロラブ嬢A1**。
- inspectionNumber: **3S0656**。
- releaseDate: **2013-10-21**。HAZUSE / K-Naviで一致。グリーンべると当時記事の納品開始2013-10-20予定とは定義を分離。
- generation/system: **5号機 / AT / CZ / 枚数管理 / ゲーム数・ポイント管理**。
- 機械割: **97.7 / 98.8 / 100.4 / 104.3 / 109.4 / 113.6%**。
- AT「LOVE RUSH」初当たり: **1/259.7 / 250.8 / 240.5 / 215.0 / 187.2 / 164.9**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。初代とラブ嬢2/IIプラス/3を分離して探索したが比較可能な初代固有値を固定できず。
- AT「LOVE RUSH」: **差枚数管理 / 純増約2.7枚/G**。
- OPENING ATTACK: **5G or 10G**で初期枚数を決定。
- 通常最大天井: **750G + 最大16G前兆**。モード別は通常A/B750G、通常C500G、天国A/B100G。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_BASE_UNVERIFIED**。

### resetBehavior v0.7

- 設定変更時の天井ゲーム数: **RESET_CONFIRMED**。
- 設定変更時のキャバクラポイント: **RESET_CONFIRMED**。
- 設定変更後は**500G以内のモード**が選択される当時解析を確認。通常時最大750Gに対する明確な朝一短縮。
- 通常Cの天井振り分けは **250G 25.00% / 500G 75.00%**。天国A/Bは **100G 100%**。
- HAZUSEに設定変更時モード移行率あり。現存抽出で安全に明示確認できる値は、設定1: 通常C87.50% / 天国A1.56% / 天国B1.56%、設定4: 81.25 / 15.63 / 3.13%、設定5: 78.13 / 18.75 / 3.13%、設定6: 75.00 / 21.88 / 3.13%。設定2/3は抽出セル省略のため推測補完しない。
- 設定変更時内部状態は**通常以上スタート**とする当時解析あり。HAZUSEにも設定変更時専用状態移行表が存在するが、全設定完全表は今回安全に復元できず `PARTIAL_PUBLIC_TABLE`。
- 据え置き時は**キャバクラポイントを内部引継ぎ**とする当時資料を確認。朝一10000pt未満でキャバクラチャンス発動なら据え置き推測材料。
- 据え置き時の天井G・モード・内部状態の完全保持契約: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更なしの純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有ガックン/初期出目/ランプ判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN**。

### conflict / safeguard

- 設定変更後最大500Gは当時解析で複数確認できる一方、2013-12-15回顧記事に「リセットしても750Gハマるという噂」の追記あり。確定反証ではないため本線を500Gに置きつつ **CONFLICT_RUMOR_RESET_500_VS_REPORTED_750_HAMARI** を保持。
- HAZUSEの設定変更時モード表は現存抽出で設定2/3のセルが省略されるため、行結合の意味を推測して埋めない。
- 2019年ラブ嬢2、2021年ラブ嬢IIプラス、2023年ラブ嬢3の電断/有利区間/50枚ベース/リセット数値を初代へ混入させない。

## 2013-10-21同日群 — CLOSED

処理済み:
- **猛虎花形**（スパイキー） — record 771。
- **パチスロ ラブ嬢**（オリンピア） — record 772。

HAZUSE / K-Navi / 当時業界記事 / 導入日検索を再横断し、今回追加すべき別の2013-10-21確定パチスロ候補を確認できなかったため同日群をCLOSED。

## 次境界

- **2013-10-22〜2013-11-04** を導入日・納品日・検定日を分離して監査する。
- Sammyの2013-10-28「パチスロ獣王 王者の帰還」ニュースは**発売告知日**であり、その日をホール導入日として扱わない。
- 次の強い具体日アンカーとして、サミーネットワークスの当時プレスリリースで **2013-11-05「パチスロ交響詩篇エウレカセブン2」ホール導入**を確認済み。
- 境界監査で10/22〜11/04の未登録確定機がなければ、エウレカセブン2を次候補として処理する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 新規時系列収集を優先し、今回QAカーソルは動かしていない。

## 次回再開地点

1. **recordCount 772 / chronologicalFrontier 2013-10-21 / 10-21群CLOSED** から開始。
2. **2013-10-22〜2013-11-04境界監査**をHAZUSE / K-Navi / 当時業界記事 / メーカー系資料で実施。
3. 漏れがなければ **2013-11-05「パチスロ交響詩篇エウレカセブン2」（Sammy）**の既存重複確認 → 未登録なら性能コア + resetBehavior v0.7を収集。
4. 導入日・納品日・発売告知日・検定日を混同しない。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から継続可能。

## 主要出典 — 取得日 2026-09-06

### パチスロ ラブ嬢

- HAZUSE: `https://hazuse.com/machine/pachislot/3S0656/` — 型式/検定/導入日/AT初当たり/機械割/天井/モード別天井/設定変更時モード・状態。
- K-Navi: `https://p-kn.com/slot/1940/` — 2013-10-21導入 / AT初当たり / 機械割 / 純増約2.7枚/G / 基本構造。
- P-WORLD / グリーンべると: `https://news.p-world.co.jp/articles/6066/greenbelt` — 2013-09-13当時記事 / 納品2013-10-20予定 / LOVE RUSH純増2.7枚/G / 枚数管理型。
- 娯楽産業: `https://www.goraku-sangyo.com/オリンピア-平和　「パチスロラブ嬢」発表/` — 2013-09-11 / OPENING ATTACK 5Gor10G / 純増2.7枚/G。
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/111/a.php` — 2013年10月機 / AT概要。
- すろぱちくえすと: `https://www.slopachi-quest.com/article/378170397-html/` — 設定変更後500G以内 / 状態通常以上 / 天井G・ポイントリセット / 据え置きポイント引継ぎ。
- すろぱちくえすと: `https://www.slopachi-quest.com/article/378049390-html/` — 通常750G天井 / 設定変更で天井Gリセット。
- メタボ教授: `https://metabopro.com/rabujyoutorimu/` — リセット500G整理 + 750Gハマリ噂の競合シグナル。

### 次候補 / 境界

- Sammy 2013-10-28ニュース: `https://www.sammy.co.jp/japanese/news/2013/95.html` — 獣王 王者の帰還の発売告知日。導入日ではないため注意。
- Sammy Networks / PR TIMES: `https://prtimes.jp/main/html/rd/p/000000147.000002703.html` — **2013-11-05 エウレカセブン2ホール導入**と明記。

## commits

- 772nd record add: `91a5b25021cbaf186d1bf4999c94fe276c66d1ef` (`db: add Pachislo Lovejo with resetBehavior v0.7`)
- handoff update: current run (`db: advance relay through Pachislo Lovejo`)
