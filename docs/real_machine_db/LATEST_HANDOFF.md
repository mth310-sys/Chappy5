# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **785**
- latestMachineAddedByChronology: **SLOT魔法少女まどか☆マギカ**（メーシー）
- latestRecord: `docs/real_machine_db/machines/2013-12-16_slot-madoka-magica.md`
- chronologicalFrontier: **2013-12-16**
- schema: **resetBehavior v0.7**
- status: **2013-12-16_GROUP_OPEN**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-12-15_queens-blade2-battle-version.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は recordCount 784 / chronologicalFrontier 2013-12-15 delivery anchor。
- 一時取得した別状態と最新mainが一致しなかったためmainを再取得し、784件を正本として再固定。古い/不整合なカーソルから作業を進めないよう是正した。
- HANDOFF指定の次候補 **「SLOT魔法少女まどか☆マギカ」**を785件目として追加。
- K-Navi / HAZUSE / パチ＆スロ必勝本 / 一撃等を横断し、性能コアとresetBehavior v0.7を収集。

## 今回追加 — SLOT魔法少女まどか☆マギカ

### identity / 性能コア

- manufacturer: **メーシー**。
- modelName: **魔法少女まどか☆マギカA**。
- approvalNumber: **3S0820**。
- hall start: **2013-12-16**（K-Navi / HAZUSE）。
- generation/system: **5号機 / 疑似ボーナス + ART / CZ / ゲーム数管理 / 天井**。
- 機械割: **97.9 / 99.0 / 101.9 / 106.3 / 111.2 / 116.2%**。
- 疑似ボーナス合算: **1/217.9 / 208.3 / 200.7 / 193.6 / 185.5 / 178.5**。
- ART初当たり: **1/545.4 / 525.6 / 484.0 / 418.5 / 369.3 / 301.5**。
- ART「マギカラッシュ」: **1セット50G+上乗せ / 純増約2.2枚/G**。
- baseGamesPer50: **約29.8G/50枚**。後年比較資料の値なので `RETROSPECTIVE_ANALYSIS_SINGLE`。
- 最大天井: **999G**。通常C 699G、天国A/B 99G。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- 設定変更: **天井G CLEAR / モード再抽選 / 状態再抽選 / 液晶=学校**。
- 電源OFF→ON: **天井G RETAIN / モード RETAIN / 状態 RETAIN / 液晶=学校**。
- 純据え置き単独表記の直接契約は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。電断契約から自動補完しない。
- 設定変更時モード振り分け（奇数/偶数系）を公開数値で保存。天国A+B合計 **12.89%**。
- 設定変更時高確スタート: 設定1/3/5 **20.0%**、設定2/4 **25.0%**、設定6 **33.3%**。
- 設定変更専用の600G短縮天井は **初代には存在しない**。これは「まどマギ2」と混同しない。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- 学校ステージは変更/電断の双方で同じため単独の変更判別には使えない。

## safeguards

- 「SLOT魔法少女まどか☆マギカ2」、Aタイプ、叛逆、前後編、フォルテ、マギアレコードの仕様を初代へ混入しない。
- まどマギ2の「設定変更後600G天井」を初代へ転記しない。
- ベース29.8G/50枚は後年の比較資料値でありメーカー公称値とは扱わない。
- 既存COMPLETE_CORE/PARTIALの性能完了判定は今回変更していない。

## 12/16同日群

処理済み:
- **SLOT魔法少女まどか☆マギカ**（メーシー） — 785件目。

既知の未処理候補:
- **吉宗（2013年）**（大都技研） — K-Naviで2013-12-16ホール導入開始確認済み。

12/16群は **OPEN**。吉宗処理後にメーカー横断で同日残存候補を再監査してからCLOSED判定する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- `2007-01_karate-baka-ichidai.md` 自体は既にv0.7 resetBehaviorを持つため重複更新しない。
- 今回は本線785件目を優先。カーソル直後の最初のresetBehavior欠損機を安全に一意固定できていないため、誤前進を避けてQAカーソルは維持。
- 既存性能coreStatusは変更なし。reset QAは性能完了判定とは別管理を維持。

## 次回再開地点

1. **recordCount 785 / chronologicalFrontier 2013-12-16 / 12-16群OPEN** から開始。
2. 次の未処理候補 **「吉宗（2013年）」（大都技研、2013-12-16）** を性能コア + resetBehavior v0.7で処理。
3. 12/16同日群を全メーカー横断監査し、追加未登録機を確認してからCLOSED判定する。
4. その後12/17以降の具体日アンカーへ進む。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。
6. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合は平均せずCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

- K-Navi 初代まどマギ: `https://p-kn.com/slot/1980/`
- K-Navi ボーナス: `https://p-kn.com/slot/1980/46924/`
- HAZUSE 初代まどマギ: `https://hazuse.com/machine/pachislot/3S0820/`
- 一撃 天井/設定変更: `https://1geki.jp/slot/madomagi/3/`
- パチ＆スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/2316/1/44298`
- P-Summa 初代まどマギ回顧: `https://psumma.jp/pachislo/871/`
- P-Summa 5号機ベース比較: `https://psumma.jp/pachislo/51204/`
