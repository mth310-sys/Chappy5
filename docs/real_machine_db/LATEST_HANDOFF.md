更新日: 2026-09-10

## 現在地点
- recordCount: **1152**
- latestRecordAdded: **トロピカルKISS スウィートVer.**
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-19_tropical-kiss-sweet.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **トロピカルKISS スウィートVer. — No.1152**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN_PENDING_FINAL_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前レコードを再取得して開始。
- INDEXは初期19件時点の旧スナップショット。README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1151件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN_ONE_CONFIRMED_GAP_REMAINING**。
- 前handoff最優先の **トロピカルKISS スウィートVer.** を再監査し、既存登録なしを確認して **No.1152** としてperformance core + resetBehavior v0.7をmainへ追加。
- 既存ビターVer.の性能値はやり直さず、スウィート固有差分のみ収集。

## No.1152 — トロピカルKISS スウィートVer.
- releaseDate: **2017-09-19**。
- manufacturer canonical label: **ハイライツ・エンタテインメント**。
- manufacturer conflict: P-WORLDは **アイゲート** 表記。法的/製造上の関係を一次資料で固定できないため `CONFLICT_MANUFACTURER_LABEL_HIGHLIGHTS_VS_IGATE` を保持。
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**。
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_IDENTITY**。

### 性能コア
- 機械割: **98.1 / 99.3 / 100.7 / 105.0 / 108.2 / 111.0%**。
- SBB: **1/993.0 / 923.0 / 819.2 / 648.9 / 555.4 / 481.9**。
- BIG: **1/392.4 / 383.3 / 383.3 / 366.1 / 358.1 / 354.2**。
- ALOHA BONUS: **1/372.4 / 372.4 / 372.4 / 360.1 / 348.6 / 344.9**。
- ボーナス合算: **1/160.2 / 156.8 / 153.5 / 141.9 / 134.0 / 128.3**。
- 50枚ベース: **約32G**。
- SRT純増: **約0.3枚/G**。
- canonical payout: SBB **252枚** / BIG **153枚** / ALOHA **54枚**。
- SRT: **50 / 100 / 150 / 200 / 300 / 500G または無限**。
- 通常天井: **ボーナス&SRT間777G → SRT**。
- SBB獲得枚数は高信頼複数資料が252枚で一致する一方、楽スロ単一ページに280枚表記があるため `CONFLICT_SBB_PAYOUT_252_VS_280_LOW_CONFIDENCE_SECONDARY` を保持し、平均しない。

### resetBehavior v0.7
- 設定変更時: **天井RESET / 内部状態RESET / アロハ艦内ステージ開始**。
- 純電源OFF→ON: **天井CARRYOVER / 状態CARRYOVER / ステージCARRYOVER**。朝一比較表で直接確認。
- 設定変更専用の天井短縮: **NONE_CONFIRMED_AFTER_RESEARCH**。777Gを再スタート。
- 朝一の通常/高確/超高確具体振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置きを独立条件として直接記述した本機固有契約: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。純電断契約から自動同定しない。
- 設定変更時アロハ艦内、純電断時ステージ引継ぎの差は変更推測材料。
- 本機固有の確定ガックン率、初期出目、ランプ判別: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2017-09-19群 — OPEN / 最終横断監査待ち
- 前handoffで確認済みだった独立スペックの欠損 **ビターVer. / スウィートVer.** は両方登録完了。
- ただしユーザー方針どおり、群をCLOSEする前に **全メーカー・表記揺れ・地域導入差・別スペック** の最終横断監査をもう一巡する。
- この最終監査で追加漏れが無ければ **2017-09-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** として次の日付群へ進める。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1152を再取得。
2. **1152件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN_PENDING_FINAL_CROSS_SOURCE_AUDIT** を正本として継続。
3. 2017-09-19を、導入カレンダー・全メーカー・表記揺れ・地域差・別スペックで再横断し、既存レコード群と突合。
4. 漏れが見つかった場合は、その最古未処理機種を **No.1153候補**としてperformance core + resetBehavior v0.7を収集・保存。
5. 漏れが無ければ **2017-09-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とし、複数の導入日資料で次の日付群を決定して時系列前進。
6. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
- 遊技日本: https://yugi-nippon.com/pachinko-news/post-14018/
- PiDEA X: https://www.pidea.jp/articles/%E4%BA%BA%E6%B0%97%E3%82%B2%E3%83%BC%E3%83%A0%E3%80%8C%E3%83%88%E3%83%AD%E3%83%94%E3%82%AB%E3%83%ABKISS%E3%80%8D%E6%96%B0%E6%84%9FSRT%E6%90%AD%E8%BC%89%EF%BC%8F%E3%83%8F%E3%82%A4%E3%83%A9%E3%82%A4%E3%83%84
- パチビー: https://www.pachibee.jp/pparticles/view/983
- ちょんぼりすた: https://chonborista.com/slot/high-enter/45615/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3043/1/66069
- K-Navi スウィートVer.: https://p-kn.com/slot/2868/
- P-WORLD スウィートVer.: https://www.p-world.co.jp/machine/database/8473
- すろぱちくえすと: https://www.slopachi-quest.com/article/tropicalkiss-sweet/
- 楽スロ（SBB280枚の低信頼競合）: https://rakuslo.com/torokisssweet-bonus.html
