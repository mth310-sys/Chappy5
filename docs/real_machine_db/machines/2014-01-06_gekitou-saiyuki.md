# 激闘！西遊記

machineName: 激闘！西遊記
aliases: 激闘!西遊記 / 激闘西遊記
manufacturer: KPE
modelName: 激闘！西遊記KT
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2014-01-06
releaseDatePrecision: exact_hall_start_multi_source

generation: 5号機
systemType: AT / 疑似ボーナス / CZ / 天井モード
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- K-Navi / アタリ7で **2014-01-06ホール導入開始**を確認。
- コナミ公式アーカイブは稼働開始を2014年1月と掲載。
- グリーンべると / 娯楽産業の2013年10月発表では **2013-12-15納品開始予定**。納品予定日と実ホール導入具体日を分離し、時系列キーは具体日資料が一致する2014-01-06を採用。
- 型式名 **激闘！西遊記KT**はグリーンべると掲載画像見出し / 中古実機資料で確認。
- 検定番号は機種名・型式名・メーカー名を変えて再探索したが安全に固定できずUNVERIFIED。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE_FOR_IDENTITY / UNVERIFIED_FOR_APPROVAL_NUMBER

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 2 | 98.5% |
| 3 | 100.3% |
| 4 | 104.8% |
| 5 | 110.2% |
| 6 | 115.0% |

- グリーンべるとのメーカー発表レンジ97～115%、K-Navi / P-WORLD / アタリ7 / pacnk / 5号機クロニクルで設定別数値が一致。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 激闘！ボーナス初当たり

| 設定 | 確率 |
|---|---:|
| 1 | 1/149.9 |
| 2 | 1/145.3 |
| 3 | 1/142.5 |
| 4 | 1/137.5 |
| 5 | 1/134.2 |
| 6 | 1/126.3 |

- K-Navi / P-WORLD / アタリ7 / pacnkで一致。グリーンべるとのメーカー発表レンジ1/149.9～1/126.3とも整合。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 当時スペック整理: **約26G/1000円（50枚）**。
- 別の当時解析整理では **約25G/1000円**。
- 近似値の丸め差の可能性はあるが同一値として平均せず **CONFLICT_BASE_APPROX_26_VS_25** として保持。
- confidence: CONFLICT_ANALYSIS_SOURCES

## netIncrease

- AT純増: **約3.0枚/G**。
- KPE公式アーカイブは5号機ATとして掲載。グリーンべると / 娯楽産業 / P-WORLD / K-Navi / パチマガスロマガで純増約3.0枚/Gを確認。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 「激闘！ボーナス」: **約50枚**。
- 青7 BIG: **平均約300枚**。
- 赤7 BIG: **平均約200枚**。
- REG: **平均約50枚**。
- グリーンべるとのメーカー発表値、およびP-WORLDで確認。
- K-Navi本文はBIGを総称して「約200枚」と説明する一方、メーカー発表は青7/赤7を300/200枚に分離しているため、総称値を青7へ転記しない。
- 一部当時ブログには青7約200枚表記もあり、青7については主値300枚をINDUSTRYとして採用しつつ **CONFLICT_SECONDARY_BLUE_BIG_200** を保持。
- confidence: INDUSTRY_PRIMARY / CONFLICT_SECONDARY

## modeSpecificMinimumData

- 通常時の激闘！ボーナス当選はレア役直撃または天井到達が中心。
- 天井ゲーム数は内部選択により **77G / 256G**。
- 「天竺RUSH」は5G間の高確率ゾーンで、ボーナスとのループ率は **72%以上**。
- CZ「激闘！ZONE」は激闘！ボーナス後に必ず突入、バトル勝利期待度70%以上。
- 全通常抽選・全モード移行テーブルは物差しDB対象外。

## ceiling

- 通常時の規定天井: **77G または 256G + 最大21G前兆**。
- 到達恩恵: **激闘！ボーナス当選**。
- P-WORLD / K-Navi / パチマガスロマガ / 中古実機資料で照合。
- 最大天井は256Gだが、内部選択で77G天井も存在する。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__GAME_COUNTER_CLEAR_AND_77G_SELECTION_PREFERENCE_CONFIRMED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は **ハマリゲーム数リセット**。
- 設定変更後は **77G天井が選択されやすくなる**という当時解析が残る。
- K-Naviにも本機専用「設定変更後の挙動」項目が存在することを確認したが、現存キャッシュから本文を直接復元できなかった。
- 77G天井選択率の具体数値は検索語・資料系統を変えて再探索したが安全に復元できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_HIGH_FOR_COUNTER_CLEAR / ANALYSIS_SINGLE_PERIOD_FOR_77G_PREFERENCE / UNVERIFIED_FOR_NUMERIC_RATE

### carryOverBehavior

- 純据え置き時の天井進捗 / 77G・256G内部選択 / その他状態について、「据え置き」「宵越し」「朝一」「天井」「モード」を組み替え、当時解析・古いDB・後年整理を再探索したが、本機専用の直接KEEP契約を安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時CLEARの反対だからという理由で自動補完しない。

### powerCycleBehavior

- 設定変更を伴わない **電源OFF→ONのみ**の天井進捗 / 内部選択 / 状態について、「電源OFF ON」「電断」「朝一」等を組み替えて再探索したが直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更: **CLEAR_CONFIRMED**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更で前日ハマリゲーム数はCLEAR。
- 設定変更後は **77G天井選択率が通常より上がる**という当時解析あり。
- 77Gは本機にもともと存在する内部天井であり、「設定変更時は必ず77G」の固定短縮天井ではない。
- 設定変更時77G選択率の具体値: **UNVERIFIED_AFTER_RESEARCH**。

### modeAfterReset

- 本機は77G / 256Gの天井選択を持ち、設定変更後は77G側が選択されやすいという解析があるため、設定変更契機で天井選択が行われることは確認可能。
- ただし資料によって「モード」と「天井選択」の呼称が統一されていないため、内部モード名を推測で新設しない。
- 具体的振り分け: **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- BIG中には高確ゲーム数状態が存在するが、通常朝一の設定変更時に引き継ぐ/再抽選する状態契約を直接示す本機固有資料は十分再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更後は77G天井側の選択率が上がるため、通常より早い激闘！ボーナス当選に期待できる朝一要素がある。
- ただし発生率の具体数値は未回収のため、朝一期待度を数値推定しない。

### resetPenalties

- 設定変更で前日のハマリゲーム数進捗が失われる。
- その他の設定変更専用不利抽選は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン / 初期出目 / 液晶表示など、設定変更と据え置きを確定または高信頼で判別する公開情報は、機種名・型式名・メーカー名と検索語を変えて再探索しても **NONE_CONFIRMED_AFTER_RESEARCH**。
- 77G付近の早期当選は設定変更後優遇と整合するが、通常時にも77G天井が存在するため変更確定判別には使わない。

### publicMorningNumbers

- 設定変更後の77G天井選択率: **UNVERIFIED_AFTER_RESEARCH**。
- 比較可能な公開値として、内部天井 **77G / 256G**、最大前兆 **21G**を保持。
- 「設定変更後は77G側が選択されやすい」という方向性は当時解析で確認。

## missingFields

- approvalNumber: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時77G天井選択の具体振り分け率: UNVERIFIED_AFTER_RESEARCH。
- 純据え置き時の天井G / 天井選択 / 状態保持契約: UNVERIFIED_AFTER_RESEARCH。
- 電源OFF→ONのみの天井G / 天井選択 / 状態保持契約: UNVERIFIED_AFTER_RESEARCH。
- 本機固有の変更判別: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- 導入時期: 業界発表は **2013-12-15納品開始予定**、K-Navi / アタリ7は **2014-01-06ホール導入開始**。定義を混ぜず、時系列キーはホール導入具体日を採用。
- baseGamesPer50: 約26G/50枚 vs 約25G/50枚。平均せずCONFLICT保持。
- 青7BIG: メーカー発表平均300枚を主値とする一方、一部二次資料に約200枚表記。平均せずCONFLICT保持。
- 「設定変更後77G選択率アップ」を「必ず77G」に拡大解釈しない。
- 後年のKONAMIスマスロや同名西遊記系機種のリセット仕様を混入しない。

## sources

取得日: 2026-09-06

- KONAMI公式 機種アーカイブ: https://www.konami.com/amusement/psm/archive/ps/2014/gekitosaiyuki/
- グリーンべると 2013-10-15: https://web-greenbelt.jp/00001157/
- 娯楽産業 2013-10-16: https://www.goraku-sangyo.com/kpe%EF%BC%8Fkpe%E3%83%BB%E9%AB%98%E7%A0%82%E8%B2%A9%E5%A3%B2%E3%80%80%E3%80%8C%E6%BF%80%E9%97%98%EF%BC%81%E8%A5%BF%E9%81%8A%E8%A8%98%E3%80%8D%E7%99%BA%E8%A1%A8/
- P-WORLD: https://www.p-world.co.jp/machine/database/7237
- K-Navi: https://p-kn.com/slot/1957/
- アタリ7: https://www.atari7.com/slot/date1428988533.php
- パチマガスロマガ 機種TOP: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/35/a.php
- パチマガスロマガ AT突入フロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/35/l.php
- pacnk: https://pacnk.com/slot/tools/sh_gekitosaiyuki.html
- スロパチクエスト（当時解析まとめ）: https://www.slopachi-quest.com/kisyubetsu/saiyuki/
- 中一商事（型式/天井整理）: https://www.nakaiti.com/html/sKpe079.html
- 5号機クロニクル KPE一覧: https://5goki.com/kpe
- 当時スペック整理（26G/千円）: https://ameblo.jp/slostar/entry-11638010616.html
