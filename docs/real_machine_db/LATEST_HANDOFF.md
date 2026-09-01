# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **324 `ウルトラマン・ザ・スロット`（山佐 / 2008-12-08）**。
- 今回 **325 `回胴黙示録カイジ2`（ロデオ / 2008-12-08）** を追加。
- **既存325件の再追加禁止。**

## 325. 回胴黙示録カイジ2

- record: `docs/real_machine_db/machines/2008-12-08_kaiji2.md`
- manufacturer: ロデオ
- releaseDate: **2008-12-08**（HAZUSE導入開始日。当時グリーンべるとは12/7納品開始予定）
- modelNumber: **カイジ2R**
- inspectionNumber: **8S0725**
- generation: 5号機
- systemType: **A+RT（ボーナス + CZ + RT）**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **96.5 / 98.0 / 100.5 / 104.2 / 109.3 / 115.1%**
- 同色BIG合算: **1/485.5 / 1/481.9 / 1/468.1 / 1/458.3 / 1/434.0 / 1/402.1**
- 異色BIG合算: **1/780.2 / 1/744.7 / 1/689.9 / 1/630.2 / 1/565.0 / 1/485.5**
- MIDDLE合算: **1/595.8 / 1/550.7 / 1/496.5 / 1/455.1 / 1/417.4 / 1/358.1**
- ボーナス合算: **1/199.2 / 1/191.1 / 1/178.6 / 1/167.6 / 1/154.6 / 1/136.2**（別資料1/136.3は丸め差として注記）
- 基本獲得: 同色BIG約**300枚**、異色BIG約**180枚**、MIDDLE約**108枚**。
- RT `ざわざわタイム`: **25G / 50G / 100G / 300G、約+0.4枚/G**。
- CZ: ボーナス後 `ざわざわチャンス`、通常時1枚役取りこぼし後 `ざわざわゾーン`。CZ中のRT突入リプレイ入賞でRTへ。
- 天井: **非搭載**。
- 50枚/1000円ベース: **UNVERIFIED_AFTER_RESEARCH**。
- `coreStatus: PARTIAL_CORE_BASE_UNVERIFIED`

### resetBehavior（325）

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガに本機の「攻め時・ヤメ時・設定変更時」専用解析項目の存在は確認したが本文未回収。CZ/RT・内部RT状態を推測で補完しない。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のCZ/RT・内部RT状態の引継ぎを本機固有資料で確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。電源OFF→ONのみのCZ/RT・内部RT状態処理を確定できず。
- `gameCounterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING**。リセット短縮天井なし。
- `modeAfterReset` / `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/液晶/朝一CZ・RT挙動を用いる機種固有判別法は確定できず。
- 公開朝一数値: 設定変更専用モード振り分け、朝一当選率、恩恵発生率は **NONE_CONFIRMED_AFTER_RESEARCH**。

## 325主要出典

取得日: 2026-09-02

- https://web-greenbelt.jp/00003921/ — グリーンべると。当時発表、ロデオ製、12/7納品開始予定、RT「ざわざわタイム」約+0.4枚/G・最大300G。
- https://hazuse.com/machine/pachislot/SX0017/ — HAZUSE。2008-12-08導入、型式カイジ2R、検定番号8S0725、設定別ボーナス確率、機械割、天井非搭載、ボーナス獲得性能。
- https://hazuse.com/machine/pachislot/SX0017/genre/209/ — HAZUSE。CZ構造、RT25/50/100/300G、約+0.4枚/G、終了条件。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/51/a.php — パチマガスロマガ。基本システム、同色BIG約300枚・異色BIG約180枚・MB約108枚。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/51/rodeo_slot_51.php — パチマガスロマガ。当該機種に「攻め時・ヤメ時・設定変更時」解析項目が存在することを確認。本文未回収のためリセット挙動の直接根拠には不使用。
- https://w.atwiki.jp/5gouki/pages/133.html — 5号機まとめwiki。設定別ボーナス確率・機械割、RT仕様の照合。
- https://pachinko.hatenablog.jp/entry/2008/12/kaiji2 — 後年回顧。設定別機械割・ボーナス確率の独立照合。

## 境界監査・重複防止

- **既存325件の再追加禁止。**
- 2008-12-08同日群の次の本線は **`ハイサイ蝶特急`（タイヨー）**。
- `いみそ～れ2バーニングエディション25/30` は2008年12月導入までは確認済みだが、12/08以前・同日と断定できる具体導入日未確定。具体日確定までピュア版性能を流用しない。
- カイジ2の50枚ベースは表記揺れ・型式名・項目名・資料系統を変えて再探索したが直接値未確定。後続QA対象。

## 次回再開地点

1. **LATEST_HANDOFF基準325件地点 / 2008-12-08同日群。**
2. 次の本線は **`ハイサイ蝶特急`（タイヨー）**。既存登録有無を再確認してから、性能コア + v0.7 `resetBehavior` を収集する。
3. 12/08同日群を閉じた後、12/09以降の最古未処理実導入機へ進む。
4. それ以前/同日に漏れた機種が具体導入日付きで見つかれば遡及挿入する。
5. `いみそ～れ2バーニングエディション25/30` の具体導入日が12/08以前または同日と確定した場合は漏れ防止で遡及追加する。
6. 各欠損は表記揺れ・型式・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を含む検索語・資料系統を変えて十分再探索後のみ `UNVERIFIED_AFTER_RESEARCH` とする。
