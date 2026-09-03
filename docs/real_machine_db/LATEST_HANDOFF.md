# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **452**
- latestMachineAdded: **ピカ吾郎V2**（遡及漏れ修復）
- latestRecord: `docs/real_machine_db/machines/2010-02-07_pikagoro-v2.md`
- chronologicalFrontier: **2010-02-21**（ゼットゴールドEX地点を維持）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**
- note: 451件・2010-02-21「ゼットゴールドEX」から前進する前に、LATEST_HANDOFFに残っていた2010年2月月内候補を具体日へ落とす境界監査を実施。未登録だった「ピカ吾郎V2」がHAZUSEで2010-02-07導入、当時グリーンべるとで2/7納品開始予定、山佐公式で2010年2月稼働と確定したため、452件目として遡及追加した。時系列前線は後退させず2010-02-21を維持する。

## 今回の継続確認

- GitHub最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、前線レコード `2010-02-21_z-gold-ex.md` を再読。
- `INDEX.md` は旧19件地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋main実ツリー＋既存レコードを優先。
- main実ツリーとrepo検索で「ピカ吾郎V2」既存レコードなしを確認。推測ファイルパスも不存在だった。
- 2010-02-21→2/22へ進む前の月内候補監査で、ピカ吾郎V2に2010-02-07の具体日があることを確認したため時系列漏れとして先に修復。

## 452 — ピカ吾郎V2 要約

- メーカー: **山佐**
- 型式: **ピカゴロウV2A**
- 検定番号: **9S1127**
- 導入: **2010-02-07**（HAZUSE具体日。当時グリーンべるとは2/7納品開始予定、山佐公式は2010年2月稼働）
- 世代: **5号機**
- タイプ: **Aタイプ / ノーマル / 技術介入**
- BIG: 設定1〜6 **1/287.44 / 1/282.48 / 1/274.21 / 1/269.70 / 1/260.06 / 1/248.24**
- REG: **1/451.97 / 1/436.91 / 1/422.81 / 1/362.08 / 1/303.41 / 1/252.06**
- 合成: **1/175.70 / 1/171.56 / 1/166.34 / 1/154.57 / 1/140.03 / 1/125.07**
- 機械割公称/旧DB: **97.0 / 98.0 / 99.5 / 101.5 / 105.0 / 110.0%**
- パチマガスロマガ・シミュレートPAYOUT: **97.10 / 98.16 / 99.71 / 101.83 / 105.49 / 110.18%** → 定義差を `CONFLICT_SIMULATION_VS_NOMINAL` として保持、平均しない。
- 50枚ベース: 当時記事 **約35G/1000円**（通常20円貸しで約50枚相当）
- BIG: **約321枚**、技術介入成功時 **MAX324枚**
- REG: **約104枚**
- ART/AT純増: **NOT_APPLICABLE**（ボーナスのみで増やすAタイプ）

## resetBehavior v0.7 — ピカ吾郎V2

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`。設定変更時の初期出目/リール/LED挙動を本機固有資料で確定できず。
- **据え置き**: 天井/長期モード引継ぎは `NOT_APPLICABLE_NO_CEILING_OR_LONG_TERM_MODE_CONFIRMED`。物理的朝一状態は `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 天井/長期モード進捗は非該当。初期出目/リール/LED挙動は `UNVERIFIED_AFTER_RESEARCH`。
- **gameCounterReset / ceilingAfterReset**: 通常天井・リセット短縮天井とも `NONE_CONFIRMED_AFTER_RESEARCH`。P-WORLDはボーナスのみで出玉を増やすノーマル機、旧パチマガも「攻め時・ヤメ時→特にナシ」。
- **modeAfterReset**: `NOT_APPLICABLE_NO_LONG_TERM_MODE_SYSTEM_CONFIRMED`。
- **stateAfterReset**: `NOT_APPLICABLE_NO_PERSISTENT_AT_ART_CZ_STATE_CONFIRMED`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/LED等を再探索したが直接根拠なし。
- **注意**: 本機には通常演出としてリール始動時に震える「ブルスタート」がある。これを朝一ガックン/設定変更判別の根拠へ誤用しない。
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要CONFLICT / QA

- 機械割は公称/旧DB系列とパチマガのシミュレート系列を平均せず双方保存。
- BIG約321枚とMAX324枚は標準純増表記と技術介入時MAXの条件差として併記。
- 5号機クロニクルの「2010年7月導入」は、HAZUSE 2010-02-07、当時グリーンべると2/7納品、山佐公式2010年2月の三系統と大きく競合するため `REJECTED_SOURCE_DATE_CONFLICT`。機械割の補助照合以外には採用しない。
- resetBehaviorは表記揺れ・型式・メーカーと、設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックン/変更判別を組み替えて再探索した後のみ未確認判定。

## 主要出典（取得日 2026-09-03）

- 山佐公式: `https://yamasa-next.co.jp/model_pkv2/`
- HAZUSE: `https://hazuse.com/machine/pachislot/9S1127/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5802`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/3744/greenbelt`
- パチマガスロマガ（ボーナス/PAYOUT）: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/170/h.php`
- パチマガスロマガ（機種メニュー）: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/170/yamasa_slot_170.php`
- 5号機クロニクル（導入月は不採用）: `https://5goki.com/yamasa`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 今回は時系列漏れ修復を優先し、既存性能値を無駄にやり直していない。
- 次回QAは実ファイル順でスロ原人直後の最初のresetBehavior欠損機を安全に特定してから補完する。

## 次回再開地点

1. **recordCount 452 / chronologicalFrontier 2010-02-21**。最新追加レコードの日付は遡及修復の2010-02-07だが、前線はゼットゴールドEXの2010-02-21を維持。
2. **2/22へ進む前に、LATEST_HANDOFFに残る2010年2月月内候補のうち2/21以前へ落ちる漏れがないか再監査**する。特に `ビューティフルジョー`、`バイオレントゾーン`、`列強伝`、`ハイハイ-30`、`真田純勇士`、`哲也 新宿VS上野DX` を具体日に落とす。
3. `新世紀エヴァンゲリオン～魂の軌跡～` はK-Naviで **2010-03-01**、FIELDS系当時リリースでも2010年3月以降導入予定を確認したため、2月前線の候補から外して3月へ送る。
4. `ハイハイ-30` はパイオニア公式で **2010年2月発売**、`列強伝` も二次資料で **2010年2月リリース**までは確認。具体日が確定するまで順序を推測しない。
5. 2/21以前の追加漏れが閉じたら **2010-02-21同日群を最終監査**し、その後、具体日確認済みの **みどりのマキバオー 2010-02-22**へ進む。
6. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得し、repo検索で重複・他リレー競合を防ぐ。
