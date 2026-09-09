更新日: 2026-09-10

## 現在地点
- recordCount: **1151**
- latestRecordAdded: **トロピカルKISS ビターVer.**
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-19_tropical-kiss-bitter.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **トロピカルKISS ビターVer. — No.1151**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN_ONE_CONFIRMED_GAP_REMAINING**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1150「パチスロ 闘え!サラリーマン」を再取得して開始。
- INDEXは初期19件時点の旧スナップショット。README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1150件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN_ADDITIONAL_GAPS_FOUND**。
- 前handoff最優先の「トロピカルKISS ビターVer. / スウィートVer.」を再監査。GitHub code searchで既存レコードなしを確認。
- 2スペックはボーナス確率、獲得枚数、天井が明確に異なるため全機種・別スペック方針上、独立レコード対象と確定。
- 今回は **ビターVer.をNo.1151** としてperformance core + resetBehavior v0.7を収集しmainへ追加。
- スウィートVer.は性能コアが十分確認できており、次回 **No.1152候補**として最優先で処理する。

## No.1151 — トロピカルKISS ビターVer.
- manufacturer canonical label: **ハイライツ・エンタテインメント**
- manufacturer conflict: **P-WORLDはアイゲート表記**。法的/製造上の関係を一次資料で固定できないため `CONFLICT_MANUFACTURER_LABEL_HIGHLIGHTS_VS_IGATE` を保持。
- releaseDate: **2017-09-19**
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機（5.5号機世代） / A+SRT**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_IDENTITY**

### 性能コア
- 機械割: **97.8 / 98.7 / 100.6 / 104.5 / 107.6 / 112.6%**。
- SBB: **1/689.9 / 668.7 / 624.2 / 560.1 / 512.0 / 461.5**。
- BIG: **1/936.2 / 910.2 / 885.6 / 819.2 / 771.0 / 753.3**。
- ALOHA BONUS(REG相当): **1/1236.5 / 1191.6 / 1129.9 / 1057.0 / 1057.0 / 1040.3**。
- 合算: **1/300.6 / 291.3 / 276.5 / 253.0 / 238.3 / 224.4**。
- 50枚ベース: **約32G**。
- SRT純増: **約0.3枚/G**。
- SBB **300枚** / BIG **207枚** / ALOHA BONUS **108枚**。
- SRT初期G数: **50/100/150/200/300/500Gまたは無限**。
- 通常天井: **ボーナス&SRT間999G → SRT**。

### resetBehavior v0.7
- 設定変更時: **天井RESET / 内部状態RESET / アロハ館内ステージ開始**。
- 純電源OFF→ON: **天井CARRYOVER / 状態CARRYOVER / ステージCARRYOVER**。ちょんぼりすたの朝一比較表で直接確認。
- 設定変更専用の天井短縮: **NONE_CONFIRMED_AFTER_RESEARCH**。通常999Gを再スタート。
- 朝一の通常/高確/超高確振り分け率: **UNVERIFIED_AFTER_RESEARCH**。
- 「据え置き」を独立条件とした本機固有直接契約: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。純電断契約から自動同定しない。
- 変更判別: 設定変更時アロハ館内、純電断時ステージ引継ぎの差は推測材料。ガックン率/初期出目/ランプの確定契約は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2017-09-19群 — OPEN
- 今回 **トロピカルKISS ビターVer. No.1151** を追加。
- **スウィートVer.が同日独立スペックとして未登録**のため群はまだCLOSEDにしない。

## 次回先行確認済み — トロピカルKISS スウィートVer.
- 導入日: **2017-09-19**。
- SBB: **1/993.0 → 1/481.9**。
- BIG: **1/392.4 → 1/354.2**。
- REG/ALOHA: **1/372.4 → 1/344.9**。
- 機械割: **98.1 → 111.0%**。
- 50枚ベース: **約32G**。
- SRT純増: **約0.3枚/G**。
- SBB **252枚** / BIG **153枚** / ALOHA **54枚**。
- 天井: **ボーナス&SRT間777G → SRT**。
- 設定変更 vs 純電源OFF→ON: ビターと同じ直接比較表上、**変更時 天井/状態RESET・アロハ館内開始、電断時 天井/状態/ステージ引継ぎ**を確認済み。
- 正式型式名/検定番号は次回も公的・検定系を再探索してからUNVERIFIED確定する。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1151を再取得。
2. **1151件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN_ONE_CONFIRMED_GAP_REMAINING** を正本として継続。
3. 最優先は **トロピカルKISS スウィートVer.**。既存登録なしを再確認し、**No.1152候補**としてperformance core + resetBehavior v0.7を保存。
4. ビター/スウィート両方処理後、2017-09-19同日群を全メーカー、表記揺れ、地域導入差、別スペックで再横断監査。
5. 追加漏れがなければ **2017-09-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とし、複数導入カレンダーで次の日付群を決定して時系列前進。
6. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1151 トロピカルKISS ビターVer.
- 遊技日本（2017-07-25発表会）: https://yugi-nippon.com/pachinko-news/post-14018/
- PiDEA X（2スペック・SRT仕様）: https://www.pidea.jp/articles/%E4%BA%BA%E6%B0%97%E3%82%B2%E3%83%BC%E3%83%A0%E3%80%8C%E3%83%88%E3%83%AD%E3%83%94%E3%82%AB%E3%83%ABKISS%E3%80%8D%E6%96%B0%E6%84%9F%E8%A6%9ASRT%E6%90%AD%E8%BC%89%EF%BC%8F%E3%83%8F%E3%82%A4%E3%83%84
- パチビー: https://www.pachibee.jp/pparticles/view/983
- ちょんぼりすた: https://chonborista.com/slot/high-enter/45615/
- K-Navi ビターVer.: https://p-kn.com/slot/2869/
- P-WORLD ビターVer.: https://www.p-world.co.jp/machine/database/8472

### 次回 スウィートVer.先行監査
- ちょんぼりすた: https://chonborista.com/slot/high-enter/45615/
- K-Navi スウィートVer.: https://p-kn.com/slot/2868/
- P-WORLD スウィートVer.: https://www.p-world.co.jp/machine/database/8473
