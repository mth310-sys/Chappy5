更新日: 2026-09-09

## 現在地点
- recordCount: **1114**
- latestRecordAdded: **燃えよ！功夫淑女ドラゴン**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-31_moeyo-kungfu-lady-dragon.md`
- chronologicalFrontier: **2017-07-31**
- frontierLatestMachine: **燃えよ！功夫淑女ドラゴン — No.1114**
- schema: **resetBehavior v0.7**
- status: **2017-07-31_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1113「パチスロ バイオハザード リベレーションズ」を再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1113件 / chronologicalFrontier 2017-07-31 / 7/31群OPEN**。
- handoff指定の次未処理 **「燃えよ！功夫淑女ドラゴン」** をNo.1114として登録。
- performance core + resetBehavior v0.7を同時収集。
- 欠損判定前に「燃えよ！功夫淑女ドラゴン / 燃えよ！功夫淑女龍 / カンフーレディドラゴン / 山佐 / EE / GG」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / 功夫チャージ」を組み替え、業界記事・当時解析・旧DB・実機流通資料を横断。

## No.1114 — 燃えよ！功夫淑女ドラゴン
- manufacturer: **山佐**
- releaseDate canonical: **2017-07-31**
- formalModelName canonical: **カンフーレディドラゴン/GG**
- modelVariantConflict: **カンフーレディドラゴン/EE** も検定通過資料/一部DBに存在。市場実機資料ではGGが複数一致するためGGをcanonicalとしたが、EEを `MODEL_VARIANT_CONFLICT_EE_VS_GG` として保持。
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**。型式末尾等から推定していない。
- generation/system: **5号機 / A+ART / ゲーム数上乗せART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_MODEL_VARIANT_CONFLICT**

### performanceCore
- 機械割: **97.6 / 99.1 / 101.0 / 105.8 / 109.0 / 116.3%**。
- ART初当たり: **1/473.1 / 449.2 / 437.8 / 400.3 / 378.9 / 294.6**。
- ボーナス合算: **1/228.3 / 224.4 / 217.0 / 204.8 / 195.6 / 191.1**。
- CZ初当たり: **1/176.8 / 164.7 / 160.3 / 143.7 / 136.1 / 100.6**。
- ベース: **約32G/50枚**。
- ART「功夫RUSH」: **約1.3枚/G**、ボーナス込み約**1.8枚/G**。
- ハイパーBONUS: **120枚**、チャレンジBONUS: **約90枚**。
- 通常ゲーム数天井: **666G**。

### resetBehavior v0.7
- settingChange:
  - ゲーム数天井進捗 **RESET**。
  - リセット後天井 **222G 50% / 666G 50%**。
  - 内部状態を再抽選し、高確スタート率を設定別に公開。
  - 試練モードのリセット時専用振り分けあり。
- resetHighStateRate:
  - 設定1 **33.2%** / 設定2 **37.5%** / 設定3 **33.2%** / 設定4 **37.5%** / 設定5 **50.0%** / 設定6 **55.1%**。
- resetTrialModeDistribution:
  - B **11.7%** / C **33.2%** / D **50.0%** / S **5.1%**。
- resetBenefits: **50%で天井222Gへ短縮**。高確/試練モード再抽選も朝一挙動へ影響。
- resetDetection: 攻略資料では朝一判別は実用上困難。ガックン判別も難易度が高いとされるが、確定発生率は未固定。
- pure power OFF→ON: ゲーム数天井・内部状態・功夫チャージの本機固有直接契約を再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。設定変更と混同しない。
- carryOver/stay setting: 独立した本機固有契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。一般的5号機挙動から推測しない。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2017-07-31群 / 次境界監査
- No.1113 バイオハザード リベレーションズ、No.1114 燃えよ！功夫淑女ドラゴンまで登録済み。
- **政宗2**: 一部当時解析は **2017-07-31**、HAZUSEおよび複数資料は **2017-08-07**。未処理。
- 次回は政宗2のexact release dateを公式/業界一次・当時解析・機種DBで再監査し、`CONFLICT_2017_07_31_VS_2017_08_07` を解消できなければ双方保持したままchronological canonicalを決める。
- 政宗2監査後に7/31群の全メーカー横断漏れ監査を行い、CLOSE可否を判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は新規本線No.1114を優先したため遡及カーソルは進めていない。
- 次QAではサンダーバードNEOXXの設定1機械割91.0%別ソース照合と、設定変更/据え置き/純電断時のRT・天井・状態契約を優先再探索する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1114を再取得。
2. **1114件 / chronologicalFrontier 2017-07-31 / 7/31群OPEN** を正本として継続。
3. 次の境界候補 **「政宗2」** をNo.1115候補として、2017-07-31 vs 2017-08-07の導入日競合を先に再監査する。
4. 導入日をcanonical化した上でperformance core + resetBehavior v0.7を収集・保存する。
5. その後7/31同日全メーカー監査を行い、群CLOSE可否を判定する。
6. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1114 燃えよ！功夫淑女ドラゴン
- K-Navi: https://p-kn.com/slot/2828/
- グリーンべると/P-WORLD業界記事: https://news.p-world.co.jp/articles/9395/greenbelt
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/40820/
- P-WORLD: https://www.p-world.co.jp/machine/database/8424
- すろぱちくえすと: https://www.slopachi-quest.com/article/kung-fu-lady-dragon/
- 2-9伝説: https://29den.com/kungfuladydragon/
- SLOT HACK: https://slothack.net/matome/3346/
- pacnk: https://pacnk.com/slot/tools/sh_moeyoisaoshukujodoragon.html
- pachinko’s blog: https://pachinko.hatenablog.jp/entry/2017/07/kung-fu-lady-dragon
- 中一商事実機流通資料: https://store.shopping.yahoo.co.jp/nakaiticom/20115.html

### 次境界監査
- 政宗2 HAZUSE: https://hazuse.com/machine/pachislot/7S0209/
- 政宗2 すろぱちくえすと: https://www.slopachi-quest.com/article/masamune2/
