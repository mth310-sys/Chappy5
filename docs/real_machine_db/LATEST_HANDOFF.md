# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **773**
- latestMachineAddedByChronology: **パチスロ 交響詩篇エウレカセブン2**（Sammy）
- latestRecord: `docs/real_machine_db/machines/2013-11-05_eureka-seven-2.md`
- chronologicalFrontier: **2013-11-05**
- frontierLatestExactDateMachine: **パチスロ 交響詩篇エウレカセブン2**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-11-05_GROUP__NEXT_SAME_DAY_CROSS_MANUFACTURER_AUDIT**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-10-21_pachislo-lovejo.md` を再読してから継続。
- INDEXは旧集約状態（19件表記）のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を正とした。
- 作業開始時の最新正本は **recordCount 772 / chronologicalFrontier 2013-10-21 / 10-21群CLOSED**。
- 2013-10-22〜2013-11-04境界を導入日/納品日/発売告知日/検定日を分離して再監査。今回、具体的ホール導入日付きで新規登録すべき機種を固定できず **CLOSED_FOR_CURRENT_RESEARCH**。
- 2013-10-28のSammy「パチスロ獣王 王者の帰還」ニュースは発売告知日であり、ホール導入日として扱わない。
- 次の強い具体日アンカー **2013-11-05「パチスロ 交響詩篇エウレカセブン2」** は既存レコード不在をmainで確認し、773件目として新規登録。

## 今回追加 — パチスロ 交響詩篇エウレカセブン2

### identity / 性能コア

- manufacturer: **Sammy / サミー**。
- modelName: **エウレカセブン2ZZ**。
- inspectionNumber: **3S0708**。
- releaseDate: **2013-11-05**。Sammy Networks当時プレスリリース、Sammy公式導入前夜イベント、HAZUSE、K-Naviで一致。
- generation/system: **5号機 / AT / 擬似ボーナス / CZ / ゲーム数・モード管理**。
- 機械割: **97.5 / 98.5 / 101.5 / 105.1 / 110.1 / 113.4%**。
- 擬似ボーナス+AT合成初当たり: **約1/162 / 156 / 154 / 136 / 131 / 115**。
- baseGamesPer50: **約31G/50枚**。現時点では単一整理資料値のため ANALYSIS_SINGLE。
- AT「C-MODE」: **1セット50G+α / 純増約2.8枚/G**。
- HYPER BIG: **約200枚 / ベルナビ40回**。
- BIG: **約100枚 / ベルナビ20回**。
- 通常モード: **A / B / C / D**。
- 最大天井: A〜C **909G**、D **777G**。A〜Cには77G仮天井あり。D天井はHYPER BIG+セブンスウェル確定。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- 設定変更時の天井ゲーム数: **RESET_CONFIRMED**。
- 設定変更時モード: **専用再抽選CONFIRMED**。
  - 設定1〜3: A 50.00% / B 12.50% / C 25.00% / D 12.50%。
  - 設定4〜6: A/B/C/D 各25.00%。
- 設定変更時内部状態: **専用再抽選CONFIRMED**。
  - 設定1〜3: 低確75.00% / 高確A18.75% / 高確B6.25%。
  - 設定4〜6: 低確66.67% / 高確A23.96% / 高確B9.38%。
- 設定変更専用の天井短縮: **NONE_CONFIRMED**。77G仮天井はA〜Cの通常仕様であり、reset専用値ではない。
- 据え置き時の天井G・モード・内部状態の完全保持契約: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON時の天井G・モード・内部状態そのもの: **UNVERIFIED_AFTER_RESEARCH**。
- ただし設定変更時および電源ON/OFF時は、CZ/デューイモード煽り用フェイクテーブルが**モードA似のテーブルへセット**される当時解析あり。この挙動単独では変更判別不可。
- ガックン/初期出目/ランプの本機固有確定判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN**。

### 朝一の主要物差し

- 設定変更後のモードD率: **設定1〜3 12.50% / 設定4〜6 25.00%**。
- 高確A/Bスタート合計: **設定1〜3 25.00% / 設定4〜6 約33.34%**。
- 設定変更で前日の天井進捗は消える。
- モードDは777G天井到達時にHYPER BIG + セブンスウェル確定だが、モードD自体の選択が朝一恩恵として比較可能。

## 2013-10-22〜2013-11-04境界 — CLOSED_FOR_CURRENT_RESEARCH

- HAZUSE / K-Navi / 当時業界記事 / メーカー系資料 / 一般検索で再横断。
- 2013-10-28「パチスロ獣王 王者の帰還」はSammyの発売告知日。ホール導入日ではないためこの境界へ混入させない。
- 今回の監査で具体的ホール導入日付きの未登録パチスロを固定できなかったため、現研究範囲では境界をCLOSED。

## 2013-11-05同日群 — OPEN

登録済み:
- **パチスロ 交響詩篇エウレカセブン2**（Sammy） — record 773。

- 同日群はまだメーカー横断最終監査を完了していないためOPEN。
- 検索では同日パチンコ機が多く混入するため、パチスロだけを分離して確認すること。

## 次境界 / 先行アンカー

- 11/05群をCLOSEDできた後、2013-11-06以降を時系列監査。
- 強い次アンカーとして **2013-11-18「パチスロ ギルティギア」（D-light）** はディ・テクノ当時プレスリリースで実機導入同時アプリ配信、パチビーで導入日2013-11-18を確認。
- 同日 **2013-11-18「パチスロ テイルズ オブ デスティニー」（北電子）** もK-Naviでホール導入開始2013-11-18を確認。
- ただし11/06〜11/17に未登録確定機がないかを先に監査し、アンカーへ飛ばさない。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 新規時系列収集を優先し、今回QAカーソルは動かしていない。

## 次回再開地点

1. **recordCount 773 / chronologicalFrontier 2013-11-05 / 11-05群OPEN** から開始。
2. **2013-11-05同日群をメーカー横断で最終監査**し、別の未登録パチスロがあれば同日内で追加。
3. 11-05群をCLOSEDできたら **2013-11-06〜11-17境界監査**へ進む。
4. 境界に漏れがなければ、先行確認済みの **2013-11-18「パチスロ ギルティギア」/「パチスロ テイルズ オブ デスティニー」** 群へ進む。
5. 導入日・納品日・発売告知日・検定日・アプリ配信日を混同しない。
6. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から継続可能。

## 主要出典 — 取得日 2026-09-06

### エウレカセブン2

- Sammy Networks / PR TIMES: `https://prtimes.jp/main/html/rd/p/000000147.000002703.html` — 2013-11-05ホール導入。
- Sammy公式イベント: `https://www.sammy.co.jp/japanese/product/pachislot/eureka2/event/` — 11/04導入前夜、11/05導入案内。
- HAZUSE: `https://hazuse.com/machine/pachislot/3S0708/` — 型式/検定/導入日/基本構造/設定変更時モード振り分け。
- HAZUSE天井: `https://hazuse.com/machine/pachislot/3S0708/genre/207/` — A〜C 909G、D 777G、77G仮天井、天井恩恵。
- 必勝本モード: `https://p.hisshobon.jp/machine/2284/1/43212` — 設定変更時A〜D振り分け。
- 必勝本状態: `https://p.hisshobon.jp/machine/2284/1/42903` — 設定変更時低確/高確A/高確B振り分け。
- K-Navi: `https://p-kn.com/slot/1939/` — 導入日/合成初当たり/純増/AT50G+α/擬似ボーナス。
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/139/a.php` — HYPER BIG約200枚、BIG約100枚、純増約2.8枚/G。
- みんスロ: `https://minslo.com/交響詩篇エウレカセブン2/` — 約31G/50枚、機械割、合成初当たり。
- pacnk: `https://pacnk.com/slot/tools/sh_eureka2.html` — 設定変更後天井Gリセット。
- すろぱちくえすと: `https://www.slopachi-quest.com/kisyubetsu/eurekaseven2/` — 設定変更時/電源ON-OFF時のフェイクテーブル挙動、判別不可。

### 次候補 / 境界

- Sammy 2013-10-28ニュース: `https://www.sammy.co.jp/japanese/news/2013/95.html` — 獣王 王者の帰還の発売告知日。導入日ではない。
- D-techno / @Press: `https://www.atpress.ne.jp/news/40700` — パチスロ ギルティギア、2013-11-18実機導入と同時アプリ配信。
- パチビー: `https://www.pachibee.jp/machines/about/213100003` — ギルティギア導入日2013-11-18。
- K-Navi: `https://p-kn.com/slot/1928/` — テイルズ オブ デスティニー導入日2013-11-18。

## commits

- 773rd record add: `68c76e0aeb402702f8a1b76617ecccc1295cae1b` (`db: add Eureka Seven 2 with resetBehavior v0.7`)
- handoff update: current run (`db: advance relay through Eureka Seven 2`)
