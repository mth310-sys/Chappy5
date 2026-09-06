# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **780**
- latestMachineAddedByChronology: **うる星やつら3**（銀座）
- latestRecord: `docs/real_machine_db/machines/2013-12-02_urusei-yatsura-3.md`
- chronologicalFrontier: **2013-12-02**
- frontierLatestExactDateMachine: **うる星やつら3**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-12-02_GROUP__URUSEI_YATSURA_3_DONE__NEXT_SUGOSURO**

## 今回の同期 / 重要事項

- 最新mainの README、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード `2013-11-18_star-driver.md` を再読。
- INDEXは旧集約状態のため README 規定どおり **LATEST_HANDOFF + 実レコード** を正本扱い。
- 作業開始時正本は recordCount 779 / chronologicalFrontier 2013-11-18 / 11-18群CLOSED / 11-19〜12-01境界CLOSED_FOR_CURRENT_RESEARCH。
- 2013-12-02群の既知未処理候補を確認し、GitHub内に既存レコードがない **うる星やつら3（銀座）** を780件目として追加。
- 2013-12-02群は **OPEN**。既知未処理候補は **スゴスロ（ネット） / パチスロ湘南純愛組！（ニューギン） / パチスロ獣王 王者の帰還（Sammy）**。この3機処理後に全メーカー横断再監査してCLOSED判定する。

## 今回追加 — うる星やつら3

### 性能コア

- manufacturer: **銀座**。
- releaseDate: **2013-12-02**。K-Naviでホール導入開始日を直接確認。
- generation/system: **5号機 / AT / 擬似ボーナス / 蓄電型BONUS / 天井 / 技術介入**。
- 設定別PAYOUT: **97.5 / 98.5 / 100.6 / 105.3 / 110.4 / 112.3%**。
- 擬似ボーナス初当たり: **1/169.08 / 155.07 / 153.11 / 124.23 / 124.01 / 98.73**。
- 1G連込み総ボーナス合成: **1/99.74 / 96.54 / 90.86 / 79.12 / 69.54 / 65.47**。
- 擬似ボーナスAT純増: **約2.9枚/G**。
- HYPER BIG約450枚 / SUPER BIG約240枚 / BIG約120枚 / REG約50枚。
- 通常モード: **通常A / 通常B / 通常C / 天国 / 超天国**。
- モード別最大規定G: **700 / 700 / 777 / 32 / 32G**。最大天井は777G。
- baseGamesPer50は十分な直接値を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL**。

### resetBehavior v0.7

- setting change: 機種固有解析で **天井到達までのゲーム数CLEAR**を確認。前日天井進捗を持ち越さない。
- carry-over: 純据え置き時のG数 / 規定モード / 内部状態KEEP契約は本機固有に直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: 単純電断・再起動時のG数 / モード / 状態保持契約を直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: setting change **CLEAR_CONFIRMED_MACHINE_SPECIFIC_ANALYSIS** / carry-over・power-cycleはUNVERIFIED。
- ceilingAfterReset: 設定変更時0Gから再計数。設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: 通常A/B/C・天国・超天国は存在するが、設定変更時振り分け数値は **UNVERIFIED_AFTER_RESEARCH**。
- stateAfterReset: 低確 / 高確 / 超高確系統は存在。設定変更・据え置き・純電断時の初期/保持振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetBenefits: リセット専用天井短縮・朝一ボーナス確定・朝一天国/高確の公開確定数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: 設定変更で前日天井進捗が消える。
- resetDetection: ガックン / 初期出目 / 液晶 / ランプ等の本機固有変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: 設定変更時 **0Gから再スタート**。通常仕様の最大規定Gは通常A/B 700G、通常C 777G、天国/超天国32G。

## safeguards / conflicts

- **2024年スマスロ「Lパチスロうる星やつら」**は別機種。555G天井や設定変更時天国約46.9%等を2013年銀座「うる星やつら3」へ混入しない。
- 最大777Gとモード別700/777/32Gは競合ではなく、全体最大とモード別規定の階層差。
- 初当たりと1G連込み総ボーナス合算を混同しない。
- 設定変更時天井G CLEARから、据え置き・純電断時KEEPを推測しない。

## 2013-12-02群

- 処理済み: **うる星やつら3**。
- 既知未処理候補: **スゴスロ / パチスロ湘南純愛組！ / パチスロ獣王 王者の帰還**。
- status: **OPEN**。既知候補処理後にALL7 / K-Navi / HAZUSE / P-WORLD / 当時業界記事等でメーカー横断監査する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順。
- `空手バカ一代` 自体はresetBehavior v0.7収集済み。
- 今回は本線780件目を優先し、直後の最初のresetBehavior欠損レコードを安全に一意固定できなかったため、誤前進を避けてカーソルを維持。
- 既存COMPLETE_CORE / PARTIAL等の性能完了判定は変更していない。

## 次回再開地点

1. **recordCount 780 / chronologicalFrontier 2013-12-02 / 12-02群OPEN** から開始。
2. 次の未処理候補 **「スゴスロ」（ネット）** を性能コア + resetBehavior v0.7で781件目候補として処理。
3. 続いて **パチスロ湘南純愛組！ → パチスロ獣王 王者の帰還**。
4. その後2013-12-02同日全メーカー監査を行い、漏れがなければCLOSED。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で最初のresetBehavior欠損機を確定し補完。
6. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合はCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

- K-Navi うる星やつら3: `https://p-kn.com/slot/1961/`
- P-WORLD うる星やつら3: `https://www.p-world.co.jp/machine/database/7245`
- パチマガスロマガ 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/12/a.php`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/12/h-1.php`
- CrankySeven うる星やつら3解析: `https://crankyseven.com/urusei3-pc.htm`
- 期待値見える化: `https://slotjin.com/zone/uruseiyatsura3-1/`
- 設定判別DB: `https://pacnk.com/slot/tools/sh_urusei3.html`
