# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **343件地点 / 2009-02-15 エアマスター**。
- 2009-02-15同日群〜2/21を具体日で再監査。月単位候補は具体日を推測せず保留。
- 銀座 **`宇宙刑事ギャバン`** は当時グリーンべるとで **2009-02-22納品開始予定**を確認。パチ&スロ必勝本は **2009-02-23導入開始予定**で、物流開始/ホール導入開始の定義差として保持。
- 既存未収録を確認し、**344件目**として追加。
- **既存344件の再追加禁止。**

## 344. 宇宙刑事ギャバン

record:
- `docs/real_machine_db/machines/2009-02-22_uchu-keiji-gavan.md`

要点:
- manufacturer: **銀座**
- releaseDate: **2009-02-22（納品開始予定）**。2/23導入開始予定資料との差は定義差として保持。
- generation: **5号機**
- systemType: **ボーナス+CZ+ART / ループART+無限ART**
- settings: **1 / 3 / 5 / F**
- メーカー発表PAYOUT: **96.2 / 99.1 / 104.7 / 111.4%**。
- ボーナス合算: **1/239.18 / 1/218.45 / 1/233.22 / 1/208.05**。
- BIG合成（ギャバンボーナス含む）: **1/381.02 / 1/348.60 / 1/372.36 / 1/332.67**。
- REG: **1/642.51 / 1/585.14 / 1/624.15 / 1/555.39**。
- 50枚ベース: **36.13 / 36.54 / 36.65 / 37.07G**。
- BIG/ギャバンボーナス約**245枚**、REG約**70枚**。
- ART `ギャバンタイム`: **30G/セット・約+1.2枚/G**。終了後CZへ。
- `スーパーギャバンタイム`: **次回ボーナスまで継続する無限ART・約+1.2枚/G**。
- 通常ボーナス間 **1200G天井**を確認。
- `coreStatus=COMPLETE_CORE`。

### v0.7 resetBehavior

- `settingChangeBehavior`: **CONFIRMED_CZ_START**。P-WORLDが設定変更後は内部的にチャンスゾーンからスタートと明記。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井G数、ナビストック、ART/CZ状態の直接資料未確定。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の天井G数、ナビストック、ART/CZ状態の直接資料未確定。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。通常天井1200Gは確認したが、設定変更でカウンタがリセット/引継ぎされるかは直接資料未確定。
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。リセット専用短縮天井は確認できず。
- `modeAfterReset`: **CZ_START_CONFIRMED / OTHER_MODE_DETAILS_UNVERIFIED**。
- `stateAfterReset`: **INTERNAL_CHANCE_ZONE_START_CONFIRMED**。ART/ナビストック処理は未確定。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **INTERNAL_CZ_START_CONFIRMED**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/ランプ等の本機固有資料未確定。
- 公開朝一専用当選率/恩恵率、設定変更時モード振分の数値は今回確認なし。

主要出典（取得日 2026-09-02）:
- https://web-greenbelt.jp/00003001/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/10/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/10/c.php
- https://p.hisshobon.jp/machine/1324/1/19902
- https://www.p-world.co.jp/machine/database/5468
- https://pacnk.com/slot/2009/gavan/top.php
- https://p-kn.com/slot/915/8261/

## 2009-02境界監査

- 2/15 `エアマスター` は既存343。
- 2/15同日〜2/21で、今回具体日付きで安全に追加できる未処理機は確定せず。
- 月単位候補 `Wキャッツ / 甘ぴかっ / アイムマジック / がんばれ満月姫! / バケーション / マキシマムインパクト / グレートエンペラーV / ドラキュラ` は具体日を継続探索し、2/22以前が確定した場合は正しい位置へ遡及挿入する。
- `宇宙刑事ギャバン` は2/22納品開始予定を確認し344として追加。
- `ラブゲッCHU` は当時業界資料で2/22納品開始予定を確認済み。**同日群の次候補**。
- `ダッシュ勝平` は2/24導入確認済み。
- `スーパーリアル麻雀` は2/24導入確認済み。
- `バトルアスリーテス大運動会` / `タコスロ7R` は3/1納品予定確認済みで2月前半へ前倒ししない。
- `魔界城` / `シャドウハーツII` の具体日が判明した場合は2008-12へ遡及挿入する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準344件地点。2009-02-22 宇宙刑事ギャバンまで接続済み。既存344件の再追加禁止。**
2. まず同日群の **岡崎産業 `ラブゲッCHU`** を既存確認し、未処理なら性能コア+v0.7 resetBehaviorを収集する。
3. 同時に2/22以前の月単位候補について具体日探索を続け、明確に過去位置が確定した場合のみ遡及挿入する。
4. 2/22同日群が閉じたら、既確認の **2009-02-24 `ダッシュ勝平` / `スーパーリアル麻雀`** 群へ進む。
5. 発表会/内覧会日を導入日と誤認しない。納品・導入・稼働開始の具体根拠を優先する。
6. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。
7. 一般論や後継機値から推測補完しない。

## コミット（今回）

- 344 宇宙刑事ギャバン: `216379108ece28c2422a92ad358bbca58948f960`
