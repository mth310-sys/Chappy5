# No.1192 秘宝伝 Rev.

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_CONFLICTS`
- machineName: 秘宝伝 Rev.
- manufacturer: サボハニ（大都技研）
- releaseDateCanonical: 2018-05-21
- generation: 5.9号機 / 5号機
- systemType: A+ART
- formalModelName: `秘宝伝Rev.／A4`
- certificationNumber: `7S1918`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは導入開始日2018-05-21、型式名`秘宝伝Rev.／A4`、検定番号`7S1918`を掲載。
- PiDEAの2018-04-06機械選定記事は「納品5/20～」と記載し、翌5/21ホール導入と整合する。
- 2-9伝説の導入一覧、当時解析「すろかい」、BASHtv導入前記事も2018-05-21を支持。
- 一方、すろぱちくえすと本機ページ/2018導入一覧は2018-05-07と掲載するため、`CONFLICT_RELEASE_DATE_2018_05_07_VS_2018_05_21`として保持。本DBでは複数独立系統と納品開始日が整合する2018-05-21をcanonicalとする。

## performanceCore

### payoutRateBySetting
導入後解析系:
- setting1: 97.9%
- setting2: 99.6%
- setting3: 103.7%
- setting4: 106.5%
- setting5: 109.9%
- setting6: 114.3%

事前業界資料PiDEA:
- setting1: 97.9%
- setting2: 99.6%
- setting3: 101.1%
- setting4: 103.4%
- setting5: 106.4%
- setting6: 110.2%

- settings3-6は明確に競合するため平均化せず`CONFLICT_PAYOUT_PRE_RELEASE_VS_POST_RELEASE`として双方保持。物差しのcanonical performance tableは導入後の複数解析で一致する97.9/99.6/103.7/106.5/109.9/114.3%を採用する。

### initialHitBySetting
ボーナス+ART合算（導入後解析）:
- setting1: 1/201.3
- setting2: 1/195.0
- setting3: 1/182.4
- setting4: 1/167.6
- setting5: 1/158.4
- setting6: 1/139.9

参考・すろぱちくえすと掲載の個別概数:
- bonus合算: 1/320 / 1/300 / 1/270 / 1/240 / 1/220 / 1/190
- ART初当たり: 1/550 / 1/550 / 1/540 / 1/538 / 1/534 / 1/520

### baseGamesPer50
- 約31G/50枚。

### netIncrease
- ART単体: 約1.4枚/G。
- ボーナス込み: 約1.9枚/G。

### basicPayout
- BIG BONUS: 約150枚。
- MIDDLE BONUS: 約150枚。
- Rev BONUS: 約90枚。

### ceiling
- 通常ゲーム数天井: 非搭載。
- 5.9号機の有利区間上限1500Gは通常時天井として扱わない。

## modeSpecificMinimumData
- ART「秘宝QUEST」は固定ゲーム数/差枚数上乗せ型ではなく、ライフが尽きるまで継続するゲーム数不定型ART。
- 通常/高確/超高確の内部状態があり、チャンス目成立時のCZ「高確率」当選率に影響。
- チャンス目成立時は有利区間へ移行することを当時解析で確認。
- 実機完全再現用の詳細小役抽選・アイテム抽選は物差し範囲外。

## resetBehavior

### settingChangeBehavior
- 設定変更後は有利区間ランプ消灯。
- 内部状態はリセットと当時解析に記載。ただし同資料が初期状態を「通常？」と疑問符付きで記載するため、通常確定とはしない。
- ステージ初期値は資料上「調査中」で固定しない。

### carryOverBehavior
- 据え置き独立表記は限定的だが、当時朝一解析では電源OFF→ON時に有利区間ランプ・内部状態を引き継ぐと掲載。
- 有利区間ランプ点灯状態が翌朝残れば据え置き濃厚という変更判別情報あり。

### powerCycleBehavior
- 純電源OFF→ON: 有利区間ランプを引き継ぐ。
- 内部状態: 引き継ぐ。
- ステージ: `UNVERIFIED_AFTER_RESEARCH`（当時資料も調査中）。

### gameCounterReset
- `NOT_APPLICABLE_NO_CEILING`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset
- 通常/高確/超高確という内部状態は存在するが、設定変更時の公開振り分け数値は確認できず`UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用天井/専用モードは`NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: 内部状態リセット。初期が通常確定かは原資料に疑問符があるため未確定。
- 電源OFF→ON: 内部状態引き継ぎ。

### advantageousSectionReset
- 設定変更: 有利区間ランプ消灯 / 有利区間は引き継がない。
- 電源OFF→ON: 有利区間ランプ状態を引き継ぐ。

### resetBenefits
- 短縮天井: `NOT_APPLICABLE_NO_CEILING`。
- 朝一設定変更後1回目のMIDDLE BONUS開始時、50%でメジェド横切り演出が発生。BIGを先に引いていても抽選は有効。
- これは出玉上の優遇ではなく設定変更確定演出として扱う。

### resetPenalties
- 設定変更固有の公開された出玉上の不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更後1回目のMIDDLE BONUS開始時のメジェド横切り: 50%。出現時は設定変更確定演出として利用可能。
- 有利区間ランプ点灯状態が翌朝残る場合は据え置き濃厚。
- ガックン固有契約: `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- resetSpecificModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- settingChangeMedjedDetectionChance: `50% at first MIDDLE BONUS start`
- gakkunChangeDetectionRate: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更後1回目MIDDLE BONUS開始時メジェド横切り: 50%。

## conflicts
- `CONFLICT_RELEASE_DATE_2018_05_07_VS_2018_05_21`
  - 2018-05-21: HAZUSE、PiDEA納品5/20～、2-9伝説、すろかい、BASHtv。
  - 2018-05-07: すろぱちくえすと本機ページ/2018導入一覧。
- `CONFLICT_PAYOUT_PRE_RELEASE_VS_POST_RELEASE`
  - PiDEA事前資料: 97.9/99.6/101.1/103.4/106.4/110.2%。
  - 導入後複数解析: 97.9/99.6/103.7/106.5/109.9/114.3%。
  - 平均化せず、導入後複数一致値をcanonical performance tableに採用。

## missingFields
- 設定変更時の内部状態初期振り分け数値。
- 設定変更/電断時の液晶ステージ初期契約。
- 本機固有ガックン発生条件/率。

## sources
取得日: 2026-09-10

1. HAZUSE — 秘宝伝 Rev.
   - https://hazuse.com/machine/pachislot/7S1918/
   - 導入2018-05-21、型式`秘宝伝Rev.／A4`、検定番号`7S1918`。
   - confidence: `INDUSTRY_DB_HIGH`
2. PiDEA X — 三木流、秘宝伝Revの評価は？（2018-04-06）
   - https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E7%A7%98%E5%AE%9D%E4%BC%9DRev%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
   - 納品5/20～、事前出玉率表、約31G/50枚、ART純増約1.4枚/G。
   - confidence: `INDUSTRY_PRE_RELEASE`
3. 期待値見える化 — 秘宝伝Rev 有利区間・朝一リセット解析
   - https://slotjin.com/slot/hihoudenrev/
   - 導入2018-05-21、導入後機械割/合算、天井非搭載、有利区間、設定変更/電源OFF→ON、メジェド50%変更判別。
   - confidence: `ANALYSIS_HIGH`
4. スロパチネット — 秘宝伝Rev.
   - https://slopachi-net.com/hihouden-rev
   - 導入2018-05-21、基本性能、導入後機械割/合算、天井非搭載。
   - confidence: `ANALYSIS_HIGH`
5. すろぱちくえすと — 秘宝伝 Rev.
   - https://www.slopachi-quest.com/article/hihouden-rev/
   - 導入2018-05-07表記、設定別ボーナス/ART概数、機械割、約31G/50枚、5.9号機上限1500G。
   - confidence: `ANALYSIS_HIGH_DATE_CONFLICT`
6. すろぱちくえすと — 2018年導入機種一覧
   - https://www.slopachi-quest.com/article/sindai-2018/
   - 2018-05-07群に秘宝伝 Rev.を掲載。
   - confidence: `ANALYSIS_SINGLE_DATE_CONFLICT`
7. 2-9伝説 — 導入日一覧
   - https://29den.com/newslot/
   - 2018-05-21群に秘宝伝Rev.約8000台を掲載。
   - confidence: `ANALYSIS_SINGLE`
8. 大都技研 — サウンドトラック
   - https://www.daitogiken.com/products/music/soundtrack/
   - 秘宝伝Rev.サウンドトラック発売日2018-05-21。補助的時期資料。
   - confidence: `OFFICIAL_AUXILIARY`

## researchNotes
- 導入日と機械割は検索語・資料系統を変えて再監査。5/7表記を削除せずCONFLICT保持。
- PiDEA事前資料と導入後解析で高設定域の機械割が大きく異なるため、仕様変更/事前値の可能性は断定せず競合として記録。
- resetBehaviorは本機固有朝一解析を優先。原資料自体が疑問符/調査中としている初期状態・ステージは確定へ昇格していない。
